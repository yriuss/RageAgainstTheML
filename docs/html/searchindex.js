Search.setIndex({docnames:["codedescription/audiomidialigner","codedescription/audiotabaligner","codedescription/datafusion","codedescription/evaluator","codedescription/filescraper","codedescription/midiace","codedescription/tabparser","codedescription/utils","codedescription/visualisation","index","installation","thesis/abstract"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["codedescription/audiomidialigner.rst","codedescription/audiotabaligner.rst","codedescription/datafusion.rst","codedescription/evaluator.rst","codedescription/filescraper.rst","codedescription/midiace.rst","codedescription/tabparser.rst","codedescription/utils.rst","codedescription/visualisation.rst","index.rst","installation.rst","thesis/abstract.rst"],objects:{"decibel.audio_midi_aligner":{aligner:[0,0,0,"-"],synthesizer:[0,0,0,"-"]},"decibel.audio_midi_aligner.aligner":{align_midi:[0,1,1,""],align_single_song:[0,1,1,""]},"decibel.audio_midi_aligner.synthesizer":{synthesize_midi_to_wav:[0,1,1,""]},"decibel.audio_tab_aligner":{feature_extractor:[1,0,0,"-"],jump_alignment:[1,0,0,"-"]},"decibel.audio_tab_aligner.feature_extractor":{export_audio_features:[1,1,1,""]},"decibel.audio_tab_aligner.jump_alignment":{HMMParameters:[1,2,1,""],test_single_song:[1,1,1,""],train:[1,1,1,""]},"decibel.audio_tab_aligner.jump_alignment.HMMParameters":{jump_alignment:[1,3,1,""]},"decibel.data_fusion":{data_fusion:[2,0,0,"-"]},"decibel.data_fusion.data_fusion":{data_fuse_song:[2,3,1,""]},"decibel.evaluator":{chord_label_visualiser:[8,0,0,"-"],evaluator:[3,0,0,"-"]},"decibel.evaluator.chord_label_visualiser":{export_result_image:[8,1,1,""]},"decibel.evaluator.evaluator":{evaluate:[3,1,1,""],evaluate_method:[3,1,1,""],evaluate_midis:[3,1,1,""],evaluate_song_based:[3,1,1,""],evaluate_tabs:[3,1,1,""],write_method_evaluations:[3,1,1,""]},"decibel.file_scraper":{midi_scraper:[4,0,0,"-"],tab_scraper:[4,0,0,"-"]},"decibel.file_scraper.midi_scraper":{download_data_set_from_csv:[4,1,1,""],download_midi:[4,1,1,""]},"decibel.file_scraper.tab_scraper":{download_data_set_from_csv:[4,1,1,""],download_tab:[4,1,1,""]},"decibel.midi_chord_recognizer":{cassette:[5,0,0,"-"]},"decibel.midi_chord_recognizer.cassette":{classify_aligned_midis_for_song:[5,3,1,""]},"decibel.tab_chord_parser":{tabparser:[6,0,0,"-"]},"decibel.tab_chord_parser.tabparser":{classify_all_tabs_of_song:[6,1,1,""]},"decibel.utils":{chordtemplategenerator:[7,0,0,"-"],filehandler:[7,0,0,"-"],musicobjects:[7,0,0,"-"]},"decibel.utils.chordtemplategenerator":{generate_chroma_all_chords:[7,1,1,""],generate_chroma_major_minor:[7,1,1,""],generate_chroma_major_minor_sevenths:[7,1,1,""]},"decibel.utils.filehandler":{file_exists:[7,1,1,""],find_duplicate_midis:[7,1,1,""],get_absolute_path:[7,1,1,""],get_all_songs:[7,1,1,""],get_chords_from_tab_filename:[7,1,1,""],get_data_fusion_path:[7,1,1,""],get_evaluation_table_by_audio_measure_path:[7,1,1,""],get_evaluation_table_path:[7,1,1,""],get_expected_best_midi:[7,1,1,""],get_expected_best_tab_lab:[7,1,1,""],get_file_name_from_full_path:[7,1,1,""],get_full_alignment_path:[7,1,1,""],get_full_audio_features_path:[7,1,1,""],get_full_audio_path:[7,1,1,""],get_full_chord_labs_path:[7,1,1,""],get_full_chordify_chord_labs_path:[7,1,1,""],get_full_midi_chord_labs_path:[7,1,1,""],get_full_midi_path:[7,1,1,""],get_full_mirex_chord_labs_path:[7,1,1,""],get_full_segmentation_labs_path:[7,1,1,""],get_full_synthesized_midi_path:[7,1,1,""],get_full_tab_chord_labs_path:[7,1,1,""],get_lab_visualisation_path:[7,1,1,""],get_relative_path:[7,1,1,""],get_well_aligned_midis:[7,1,1,""],init_folders:[7,1,1,""],read_alignment_file:[7,1,1,""],read_chord_alignment_score:[7,1,1,""],read_log_likelihood:[7,1,1,""],read_midi_chord_probability:[7,1,1,""],remove_file:[7,1,1,""],write_chord_alignment_score:[7,1,1,""],write_log_likelihood:[7,1,1,""],write_midi_chord_probability:[7,1,1,""]},"decibel.utils.musicobjects":{Chord:[7,2,1,""],Fingering:[7,2,1,""],Interval:[7,2,1,""],Pitch:[7,2,1,""],PitchClass:[7,2,1,""],Song:[7,2,1,""]},"decibel.utils.musicobjects.Chord":{from_common_tab_notation_string:[7,4,1,""],from_harte_chord_string:[7,4,1,""],from_shorthand_degree_bass:[7,4,1,""]},"decibel.utils.musicobjects.Fingering":{get_extended_chroma_vector:[7,3,1,""]},"decibel.utils.musicobjects.Interval":{from_harte_interval:[7,4,1,""],from_pitch_class_distances:[7,4,1,""]},"decibel.utils.musicobjects.Pitch":{from_pitch_class_and_octave_number:[7,4,1,""],from_pitch_name:[7,4,1,""],is_higher_than:[7,5,1,""],transpose_by:[7,3,1,""],transpose_down_by:[7,3,1,""]},"decibel.utils.musicobjects.PitchClass":{from_harte_pitch_class:[7,4,1,""]},"decibel.utils.musicobjects.Song":{add_midi_path:[7,3,1,""],add_tab_path:[7,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:classmethod","5":"py:staticmethod"},terms:{"10th":4,"13d":7,"160qndkrytqztifjl":10,"1ivkzta01e2h":11,"1u7fpx29ugbv7ff":10,"23rd":8,"38th":8,"abstract":11,"boolean":4,"break":[5,11],"class":[0,1,4,7],"export":[1,8],"final":[0,2,3,7,9,11],"float":[1,7],"function":[0,1,3,4,5,9],"int":[1,7],"long":[0,8],"new":[0,9],"return":[0,1,3,4,7],"static":7,"true":[7,8],"try":4,"while":[0,1],ACE:[2,3,7,8,9,11],But:10,FOR:7,For:[0,1,2,3,6,8,9,10,11],The:[0,1,2,3,4,5,6,7,8,9,10,11],Then:[0,1,2,6],There:[1,10],Using:4,aaah:6,abov:6,absolut:7,accuraci:[3,11],ace:7,achiev:2,acoust:0,add:6,add_midi_path:7,add_tab_path:7,added:7,addit:[0,1,11],after:[2,4,6,8],aggreg:0,agre:8,album:7,algorithm:[0,1,2,3,5,7,8,11],align:[3,5,6,7,8,9,10,11],align_midi:0,align_single_song:0,alignment_scor:7,aling:7,all:[0,2,3,4,5,6,7,8,9,11],all_chords_list:5,all_song:3,allow:[1,8],alreadi:[1,2,4,7],also:[0,3,8,11],alter:[1,2,6],although:9,alwai:[2,3],analysi:[8,11],analyz:8,ani:[0,5,6],annot:[1,3,4,7,8,9,10,11],annual:9,answer:2,appli:[2,5],applic:[9,11],approxim:3,apt:10,around:[7,10],arrai:0,art:[5,9,11],assign:[5,6,9,11],audio:[2,3,4,5,6,7,8,9,10,11],audio_ac:7,audio_cqt:0,audio_features_path:1,audio_midi_align:0,audio_tab_align:1,audio_tim:0,aug:6,augment:3,automat:[3,4,9,11],avail:[4,11],averag:[1,3],axi:8,backward:1,band:0,bar:[5,6,7,8],base:[0,1,2,3,4,5,7,8,11],base_fret:7,basic:3,bass:7,bass_degre:7,bb2:7,bb4:7,bbb4:7,bbb:7,beat:[1,5,7,8],beatl:[4,8,10],becaus:[2,4],been:[3,9,11],behavior:8,belong:6,below:[0,8],benchmark:9,best:[1,2,3,7],better:2,between:[0,1,3,6,7,8],big:3,billboard:3,bit:0,bool:[4,7],both:[0,3,8,9,11],bracket:6,bridg:6,broke:4,c_sharp:7,calcul:[0,1,3,5],call:[4,5,7],can:[0,1,4,6,7,8,9,10,11],cannot:[4,7,10],capo:6,carol:4,cassett:[5,8],ceil:11,certain:7,certainli:5,chang:[1,6,7,10],charact:6,check:[2,6,7],checksum:7,chf:7,chf_2017:8,chf_2017_df_best:3,chord:[0,1,2,3,4,7,8,9,11],chord_label_visualis:8,chord_labs_path:7,chord_str:7,chordifi:[7,8],chordlab:7,chords_from_tab_file_path:1,chords_list:[1,2,8],chordtemplategener:7,choru:[0,6],chorus:6,chroma:[1,5,7],cite:[1,6],citet:2,classif:9,classifi:6,classify_aligned_midis_for_song:5,classify_all_tabs_of_song:6,classmethod:7,clone:[9,10],cluster:8,cmaj:7,code:[9,10],colin:0,color:8,com:[9,10,11],combin:[2,6,8,10],commerci:[9,11],common:[0,6],commonli:3,compar:[0,1,2,3,8],comparison:8,competit:11,complet:1,components_degree_list:7,comput:[3,10],computation:3,compute_cqt:0,concaten:3,conclud:6,condit:6,confer:[0,4],confid:0,connect:4,consecut:1,consequ:11,consid:[3,8],consist:[6,7,8,9,11],constant:[0,1],constraint:0,contain:[0,4,6,11],content:[8,9],contest:3,continu:[4,10],contribut:11,convert:[0,1],coordin:0,copyright:10,core:10,corpu:3,correct:3,correctli:3,correspond:[1,7,9],cosin:0,cost:0,cqt:0,cqwx6cix9dgrzoohn:11,creat:[3,4,7,11],cross:[8,11],csr:[3,7],csv:[4,7,10],csv_path:4,current:[9,11],daniel:0,daphn:7,daphneo:[9,10],data:[3,4,6,7,8,9,10,11],data_fus:2,data_fuse_song:2,data_path:[7,10],datafram:3,dataset:4,db11:7,debian:10,decibel:[0,1,2,3,4,6,7,8,10],deepen:8,deeper:8,defin:[6,7],definit:6,degre:7,degree_string_list:7,demo:11,depend:[2,10,11],describ:3,design:6,detect:11,determin:[3,6],deviat:8,df_type_str:7,dict:1,dictionari:7,did:7,differ:[1,2,8,11],digit:[6,8],dim:6,direct:3,directori:[4,10],disagr:8,distanc:[0,3,7],distinguish:6,distribut:1,divid:[3,6],doe:[2,5,6,7],doubl:7,down:[4,7],download:[4,10],download_data_set_from_csv:4,download_midi:4,download_tab:4,drive:[7,10,11],dspace:11,dtw:0,due:[7,8,9,10],duplic:7,durat:[0,3],dynam:[0,11],each:[0,1,2,5,6,7,8,9,11],earlier:2,easi:[5,8],easili:8,effici:3,eight:8,either:[2,4,6,7,8],element:[1,6,7],elli:0,els:8,empir:2,empti:[6,7],enabl:11,end:[0,7,8],enough:10,enthusiast:8,environ:10,equal:6,error:8,estim:[0,1,2,3,5,6,8,9,11],etc:10,evalu:[7,8,9,11],evaluate_method:3,evaluate_midi:3,evaluate_song_bas:3,evaluate_tab:3,event:8,everi:[0,3],exactli:[6,7],exampl:[0,4,6,8,10],exclud:7,exist:[1,4,7,8,9,11],expans:7,expect:[1,2,7],experi:[2,4,10,11],exploit:[9,11],export_audio_featur:1,export_result_imag:8,extens:[1,7],extern:10,extract:[7,9],fail:[4,7],failur:4,fals:[7,8],featur:[0,5,7,9],feature_extractor:1,feed:1,figur:[0,10],file:[1,2,3,5,6,7,8,9,10,11],file_exist:7,file_path:7,file_scrap:4,filehandl:7,filenam:[4,7],fill:10,find:[0,5,6,7,8,10],find_duplicate_midi:7,finger:[7,8],finish:3,first:[0,1,2,6,7,9,10,11],fix:2,flat:[6,7],fluidr3_gm:0,fluidsynth:[0,10],folder:[7,10],follow:[1,2,6,9],form:[2,6],format:[4,8,11],forward:1,found:[0,7,9,10,11],four:[1,6],fragment:3,frame:[0,1,3],framework:10,from:[0,1,2,3,4,7,8,9,10,11],from_common_tab_notation_str:7,from_harte_chord_str:7,from_harte_interv:7,from_harte_pitch_class:7,from_pitch_class:7,from_pitch_class_and_octave_numb:7,from_pitch_class_dist:7,from_pitch_nam:7,from_shorthand_degree_bass:7,fulfil:6,full:7,full_alignment_write_path:0,full_audio_path:7,full_ground_truth_chord_labs_path:7,full_midi_path:7,full_path:7,full_segmentation_labs_path:7,full_synthesized_midi_path:0,full_tab_file_path:7,full_tab_path:7,fundament:[9,11],further:11,fuse:2,fusion:[7,9,11],gbb:7,gener:7,generate_chroma_all_chord:7,generate_chroma_major_minor:7,generate_chroma_major_minor_seventh:7,genr:8,get:[3,7,10],get_absolute_path:7,get_all_song:7,get_chords_from_tab_filenam:7,get_data_fusion_path:7,get_evaluation_table_by_audio_measure_path:7,get_evaluation_table_path:7,get_expected_best_midi:7,get_expected_best_tab_lab:7,get_extended_chroma_vector:7,get_file_name_from_full_path:7,get_full_alignment_path:7,get_full_audio_features_path:7,get_full_audio_path:7,get_full_chord_labs_path:7,get_full_chordify_chord_labs_path:7,get_full_midi_chord_labs_path:7,get_full_midi_path:7,get_full_mirex_chord_labs_path:7,get_full_segmentation_labs_path:7,get_full_synthesized_midi_path:7,get_full_tab_chord_labs_path:7,get_lab_funct:3,get_lab_visualisation_path:7,get_relative_path:7,get_well_aligned_midi:7,git:10,github:[9,10],give:8,given:[0,1,3,5,7,9,11],glass:11,goe:0,golden:8,good:5,googl:[10,11],great:1,ground:[3,7,8],ground_truth_lab_path:3,guitar:[6,8],gulli:0,ham:3,handi:4,handl:[7,11],hard:10,harmon:[1,2,8,11],harmoni:9,hart:7,harte_interval_str:7,harte_pitch_class:7,has:[0,3,6,9,11],have:[0,1,2,3,6,8,10,11],henceforth:2,her:10,here:11,heterogen:[8,11],heurist:6,hidden:[1,11],higher:7,highest:3,hmm:1,hmm_paramet:1,hmmparamet:1,homogen:8,hop:1,horizont:8,hour:10,how:[3,8,10],howev:[1,2,3,5,8],hpss:1,http:[9,10,11],human:3,hyphen:6,icassp:0,ident:7,identifi:[3,6,7],ieee:0,immedi:[0,8],implement:[2,5],implicitli:[8,9,11],improv:[9,11],inconsist:[4,8],incorpor:[1,8,11],index:[7,9],indexaudio:10,indexmidi:4,indextab:4,indic:[3,4,6],inform:[1,4,6,7,8,9,11],init_fold:7,input:[2,10,11],insight:9,instal:9,instanc:7,instant:3,instead:8,instruct:9,integ:7,integr:[2,9,11],interest:[2,8],intermedi:10,intern:[0,4],internet:4,interrupt:0,interv:7,invalid:7,is_higher_than:7,ismir:11,isophon:[2,3,4,9,10],issu:8,iter:2,its:[0,3,6,7],itself:2,join:7,joint:1,jump:[7,9],jump_align:1,just:6,kei:[4,7,10],kind:7,king:4,know:[6,7],knowledg:[8,9,11],koops2016integr:2,lab:[1,2,3,7],lab_write_path:1,label:[0,1,2,3,5,6,7,8,9,11],larg:11,larger:6,last:7,late:11,least:6,length:[1,3],let:0,letter:6,level:[5,7,8],librari:11,librosa:1,like:[6,7],likelihood:[1,7],limit:11,line:[1,4,9],linetyp:6,link:11,list:[1,4,5,6,7],listen:3,liter:7,local:[4,10],locat:[4,7],log:[0,7],log_likelihood:7,longer:0,look:0,lot:[6,11],lyric:[6,8],machin:4,macrae2012link:6,made:[2,8],magnitud:0,mai:7,main:[5,11],maj:[6,7],major:[1,2,7,8],make:[8,10],mani:11,manual:[8,11],map:0,marker:6,markov:[1,11],master:11,match:[0,1,3,5,6,7,8,11],materi:8,matter:2,matthia:4,mauch2009omras2:4,mauch:4,mcvicar2011us:1,md5:7,mean:[1,7],measur:[3,7,8],media:7,median:0,messag:4,metadata:4,method:[0,2,3,4,7,8,9,11],method_nam:[3,7],mid:7,midi:[2,3,7,8,9,10,11],midi_chord_prob:7,midi_directori:4,midi_file_nam:7,midi_file_path_from:0,midi_nam:[4,7],midi_pitch:7,midi_scrap:4,midi_url:4,millisecond:[0,2],min7:7,min:[6,7],minor:[2,7,8],mir:[9,11],mirex:[3,7,9,11],mirex_submission_name_str:7,miss:8,modal:8,mode:7,model:[1,11],modul:[0,4,9],mono:1,more:3,moreov:11,most:[1,5,6,7,8],mriex:3,much:2,multipl:[8,11],music:[0,2,4,5,7,8,9,11],musicobject:7,my_lab_path:3,name:[3,4,7],natur:9,ndarrai:0,need:[0,1,2,3,4,7,10],next:[6,10],none:[0,1,3,6,7],normal:3,note:[0,5,6,7,8],novel:11,now:[0,1,6],number:[1,2,3,4,6,7,10],numpi:0,object:[0,1,5,7],observ:[8,11],obtain:[2,8,11],occur:1,octav:7,octave_numb:7,off:8,old:5,omit:2,omras2:4,one:[1,2,3,6,7,9,11],onli:[2,4,6,7,11],oooh:6,oper:10,optim:[0,1],option:7,order:[0,2,3,11],origin:[1,2,6],other:[1,2,4,6,8,10,11],our:[0,1,2,3,6,7,8,9,10],out:6,outlin:0,output:[3,9,11],over:[0,1,3,9],overfit:11,oversegment:2,own:[4,6,9],p_b:1,p_f:1,packag:[1,10],page:9,pair:[0,6],panda:3,paper:[0,7],parallel:3,param:7,paramet:[0,1,2,3,4,5,6,7,8],pars:[1,3,6,7,9,11],parser:6,part:[0,1,8,10],passag:8,path:[0,1,3,4,7,10],pattern:6,penalti:0,percept:9,percuss:1,perform:[2,3,8,9,11],period:3,perspect:8,pick:2,pip:10,pitch:7,pitch_1:7,pitch_2:7,pitch_class:7,pitch_class_numb:7,pitch_nam:7,pitchclass:7,place:[4,10],plai:6,png:[7,8],point:[2,6],popular:[3,8,11],posit:[0,1,8],possibl:[0,8,10],precis:3,predefin:[4,5],preprocess:9,prescrib:4,present:11,preval:1,previou:10,print:3,probabl:[1,7],problem:[9,11],proc:4,procedur:[0,5,10],process:0,product:8,program:0,prohibit:11,project:4,promis:1,properti:8,propos:[6,7],purpos:[1,3],put:[4,10],python:[1,10],qualiti:3,queen:[4,10],question:2,quickli:0,raffel2016optim:0,raffel:0,rand:7,random:2,rare:2,rate:[0,1],reach:[2,11],read:[7,8],read_alignment_fil:7,read_chord_alignment_scor:7,read_log_likelihood:7,read_midi_chord_prob:7,realign:0,reason:10,recal:3,receiv:0,recent:[7,9,11],recogn:[0,5],recognit:5,record:[0,8,9,11],refer:[1,3,4,9,10],regard:1,rel:7,relative_path:7,reload:0,remain:6,remap:0,remov:[6,7],remove_fil:7,remove_file_path:7,renam:10,repeat:0,repetit:0,report:0,repositori:10,repres:[7,8],represent:[0,2,3,7,8,11],reproduc:[4,9,10],requir:[5,6,10,11],research:[2,9,11],respect:3,result:[0,2,3,8,9,10,11],resum:0,retain:[1,6],retriev:[4,9,11],reveal:8,rich:[2,8],right:0,rnd:2,robbiewilliam:3,root:7,root_not:7,run:[0,1,10],rwc:3,same:[0,3,6,7,9],sampl:[0,1,2,3],sampling_r:0,satisfi:6,save:10,saw:10,scale:[0,11],score:[0,7,8,9,11],scrape:[9,11],seagat:7,search:[6,9],second:[7,8,11],see:[0,8],seem:11,seen:[2,8],segment:[3,5,7,9,11],segmentation_method:7,segmentation_typ:[5,7],segmentationlab:7,select:2,selection_method_str:7,semitone_interv:7,separ:[1,6],sequenc:[1,2,3,6,7,8,9,11],seri:8,set:[0,1,2,3,4,6,7,8,9,11],setup:10,seven:11,seventh:7,share:10,sharp:7,sheet:6,shortcut:7,shorthand:7,shorthand_str:7,shorthand_typ:7,should:[4,6],show:[8,9,11],shown:0,sign:6,signal:0,significantli:[2,11],silenc:0,similar:[5,6],simpl:5,simpli:6,sinc:[0,3,10],singl:[0,4,7,8],six:[6,8,11],size:10,slash:6,slumber:8,softwar:0,solv:[9,11],some:[4,7,8,10],someth:8,song:[0,1,2,3,4,5,6,7,8,9,10],song_kei:7,sound:8,soundfont:0,sourc:[0,1,2,3,4,6,7,8,9],space:[1,6,10],specif:3,specifi:[0,4,7],speech:0,split:6,squar:6,stand:10,standard:3,start:[0,1,7,8],startswith:7,state:[1,5,9,11],statement:3,step:[1,2,5,6,8,9,10,11],stop:10,store:[0,10],str:[0,1,4,7],strategi:2,string:7,structur:6,studi:8,subject:[8,9],submiss:[7,9,11],subsequ:[6,11],subset:4,subsystem:[2,3,8],success:4,successfulli:4,sudo:10,suffer:[2,11],suitabl:6,sum:3,sung:6,superflu:0,support:8,sure:10,sus:6,symbol:[3,5,6,7,11],synchron:[1,8],syntax:7,synthes:[7,9,10],synthesize_midi_to_wav:0,system:[1,3,8,9,10,11],tab:[2,3,7,8,9,11],tab_chord_pars:6,tab_directori:4,tab_file_path:7,tab_nam:4,tab_scrap:4,tab_url:4,tabl:10,tablatur:6,tabpars:6,take:[0,1,2,3,10],tape:5,task:[9,11],techniqu:[0,3,11],templat:[5,7,11],term:[2,3,11],termin:[2,10],test:[2,9],test_single_song:1,text:[6,7],than:[2,6,7],thei:[0,7,8],them:[1,4,6,7,8,10],thereaft:8,therebi:[6,9,11],therefor:[1,2,3,6,8],thesi:11,theta:1,thi:[0,1,2,3,4,5,6,7,8,10],third:8,three:[2,5,6,8],through:11,tick:8,tie:5,time:[0,1,3,6,8,11],titl:7,to_pitch_class:7,togeth:6,total:[3,10],traceback:7,train:[1,5,11],train_song:1,training_set:1,transcript:[3,8],transform:[0,1,7,8],transit:1,transpos:7,transpose_bi:7,transpose_down_bi:7,transposit:[1,7],treat:3,truth:[3,7,8],tune:6,tupl:[7,8],two:[0,2,6,7],twofold:11,txt:[7,10],type:[7,9],typic:[6,7,8],ubuntu:10,ucss:1,unchang:[0,2],undefin:6,under:3,underli:8,understand:[5,8],unifi:8,until:3,untim:[1,8,9,11],url:4,use:[1,2,3,5,7,10,11],used:[0,3,4,6],uses:[0,2,3,4,9,11],using:[0,1,2,3,4,6,8,11],uspop2002chord:3,usual:3,util:[1,9,10,11],valueerror:7,vector:[0,1,7],veri:[6,8],vers:6,version:[7,8,11],vertic:6,view:[8,11],visual:8,visualis:[7,9],vocabulari:[1,2,5,8],vote:2,wai:[1,2,6],want:[2,5,6,7,8,9],warp:[0,11],wav:[0,7,10],waveform:[0,8],wcsr:[2,3],web:11,weigh:3,weight:[2,3,5],well:[1,7,8,9,11],were:[4,7],what:9,when:[0,3,8,10],where:[1,3,4,10],wherea:8,whether:3,which:[0,1,2,3,4,5,6,7,8,9,10,11],whole:3,wide:3,wiki:10,within:5,without:[2,7,11],word:[1,6],work:[2,7],would:[3,6],wrap:7,write:[0,1,2,3,7],write_chord_alignment_scor:7,write_log_likelihood:7,write_method_evalu:3,write_midi_chord_prob:7,written:0,year:[9,11],yet:[3,7,9,11],yield:7,you:[3,4,7,9,10],your:[4,9,10],zweieck:4},titles:["Aligning MIDI to audio","Aligning tab to audio","Data Fusion","Evaluation","Scraping MIDI and tab files","Extracting chords from MIDI","Extracting chords from tabs","Utility Functions","Visualisation","Welcome to DECIBEL\u2019s documentation website!","Installation instructions","What is DECIBEL?"],titleterms:{"function":7,"try":9,align:[0,1],audio:[0,1],chord:[5,6],classif:6,data:2,decibel:[9,11],document:9,evalu:3,extract:[1,5,6],featur:1,file:[0,4],from:[5,6],fusion:2,indic:9,instal:10,instruct:10,jump:1,line:6,midi:[0,4,5],preprocess:1,scrape:4,segment:6,synthes:0,system:6,tab:[1,4,6],tabl:9,type:6,util:7,visualis:8,websit:9,welcom:9,what:11,yourself:9}})