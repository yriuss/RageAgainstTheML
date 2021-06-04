import multiprocessing as mp
import json
from os import path

from sklearn.model_selection import KFold

from decibel.audio_midi_aligner import aligner
from decibel.audio_midi_aligner.alignment_parameters import AlignmentParameters
from decibel.audio_tab_aligner import feature_extractor, jump_alignment
from decibel.audio_tab_aligner.hmm_parameters import HMMParameters
from decibel.data_fusion import data_fusion
from decibel.evaluator import evaluator, result_table_generator, chord_label_visualiser, figure_generator
from decibel.evaluator.chord_label_visualiser import export_result_image
from decibel.import_export import filehandler, hmm_parameter_io
from decibel.import_export.filehandler import MUSIC_INPUT
from decibel.midi_chord_recognizer import cassette
from decibel.midi_chord_recognizer.midi_bar_segmenter import MIDIBarSegmenter
from decibel.midi_chord_recognizer.midi_beat_segmenter import MIDIBeatSegmenter
from decibel.music_objects.chord_vocabulary import ChordVocabulary
from decibel.music_objects.song import Song
from decibel.tab_chord_parser import tab_parser
from decibel.file_scraper.tab_scraper import music_input
NR_CPU = max(mp.cpu_count() - 1, 1)
#NR_CPU = 1
########################
# DATA SET PREPARATION #
########################

# Make sure the file structure is ready
filehandler.init_folders()

#Prepare inputs
music_names, tab_names = music_input()

# Retrieve the chord vocabulary. Our experiments are running on a chord vocabulary of major and minor chords.
chord_vocabulary = ChordVocabulary.generate_chroma_all_chords()

# Collect all songs and paths to their audio, MIDI and tab files, chord annotations and ground truth labels
all_songs = filehandler.get_all_songs()

print('Preparing data set finished')


###############################
# TRAINING JUMP ALIGNMENT HMM #
###############################

def prepare_song(song: Song):
    tab_parser.classify_all_tabs_of_song(song=song)
    feature_extractor.export_audio_features_for_song(song=song)
    return '{} is preprocessed.'.format(str(song))


# Pre-process songs for (training) jump alignment
# pool = mp.Pool(NR_CPU)
# for song_key in all_songs:
#     pool.apply_async(prepare_song, args=(all_songs[song_key],), callback=print)
# pool.close()
# pool.join()

for song_key in all_songs:
    print(prepare_song(all_songs[song_key]))

print('Pre-processing finished')

# Train HMM parameters for jump alignment
kf = KFold(n_splits=10, shuffle=True, random_state=42)
hmm_parameter_dict = {}
song_keys = list(all_songs.keys())
for train_indices, test_indices in kf.split(all_songs):
    hmm_parameters_path = filehandler.get_hmm_parameters_path(train_indices)
    if filehandler.file_exists(hmm_parameters_path):
        hmm_parameters = hmm_parameter_io.read_hmm_parameters_file(hmm_parameters_path)
    else:
        hmm_parameters = jump_alignment.train(chord_vocabulary,
                                              {song_keys[i]: all_songs[song_keys[i]] for i in list(train_indices)})
        hmm_parameter_io.write_hmm_parameters_file(hmm_parameters, hmm_parameters_path)

    for test_index in test_indices:
        song_key = song_keys[test_index]
        hmm_parameter_dict[song_key] = hmm_parameters

print('HMM parameter training finished')




####################
# DEPLOYMENT PHASE #
####################

def estimate_chords_of_song(song: Song, chord_vocab: ChordVocabulary, hmm_parameters_of_fold: HMMParameters):
    # Align MIDIs to audio
    alignment_parameters = AlignmentParameters()
    aligner.align_single_song(song=song, alignment_parameters=alignment_parameters)

    # Find chords for each best aligned MIDI
    segmenters = [MIDIBarSegmenter(), MIDIBeatSegmenter()]
    for segmenter in segmenters:
        cassette.classify_aligned_midis_for_song(song=song, chord_vocabulary=chord_vocab, segmenter=segmenter)

    # Jump alignment
    jump_alignment.test_single_song(song=song, hmm_parameters=hmm_parameters_of_fold)

    # Data fusion
    data_fusion.data_fuse_song(song=song, chord_vocabulary=chord_vocab)

    return '{} is estimated.'.format(str(song))


# for song_key in all_songs:
#     estimate_chords_of_song(all_songs[song_key], chord_vocabulary, hmm_parameter_dict[song_key])

# Estimate chords for all songs
# pool2 = mp.Pool(NR_CPU)
# for song_key in all_songs:
#     pool2.apply_async(estimate_chords_of_song,
#                       args=(all_songs[song_key], chord_vocabulary, hmm_parameter_dict[song_key]),
#                       callback=print)
# pool2.close()
# pool2.join()




# pool3 = mp.Pool(NR_CPU)
# for song_key in all_songs:
#     pool3.apply_async(additional_actual_best_df_round,
#                       args=(all_songs[song_key], chord_vocabulary),
#                       callback=print)
# pool3.close()
# pool3.join()

# testing songs
for i in range(1):
    test_song = Song(music_names[i], music_names[i], music_names[i], '', path.join(MUSIC_INPUT, str(music_names[i]) + '.mp3'), '')
    for tab_name in tab_names[i]:
        test_song.add_tab_path(path.join(filehandler.TABS_FOLDER, tab_name+'.txt'))
    tab_parser.classify_all_tabs_of_song(song=test_song)
    jump_alignment.predict_single_song(song=test_song, hmm_parameters=hmm_parameters)
    data_fusion.data_fuse_song(song=test_song, chord_vocabulary=chord_vocabulary)



def output_labs_to_json(path_to_lab,music_name):

  music = music_name

  data = {}

  data[music] = []

  with open(path_to_lab, 'r') as f:
    for i,x in enumerate(f):

      aux = x.split(" ")

      aux[2] = aux[2].replace("\n","")

      data[music].append({"current_beat": int(i),
                      "current_beat_time": round(float(aux[1]),2),
                      "estimated_chord": aux[2]})

  #json_dump = json.dump(data)

  with open('/content/drive/MyDrive/RageAgainstTheML_Moises_Challenge/DECIBEL/output_'+music_names[0].replace(" ","_")+'.json', 'w') as outfile:
    json.dump(data, outfile)

output_labs_to_json("/content/drive/MyDrive/RageAgainstTheML_Moises_Challenge/DECIBEL/Data/Results/Labs/TabLabs/" + tab_names[0][0] + '.txt',music_names[0].replace(" ","_"))

print("Test done!")
