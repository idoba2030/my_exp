import os
import pandas as pd
from os import listdir, remove
from os.path import isfile, join

path_to_data='C:\\Users\\ido\\Documents\\data\\all_data_07_21_1'
os.chdir(path_to_data) #changes current directory
session_folders=listdir() #list of folders
good_subj=pd.read_csv('C:\\Users\\ido\\Documents\\data\\python_for_data\\good_subj.csv') #prolific id list of subjects we want to keep

###
#remove all folders of subjects who didn't complete the whole experiment
###
for session_folder in session_folders:
	location=os.path.join(path_to_data,session_folder) #create the path string
	os.chdir(location)
	subj_folders=listdir()
	print(len(subj_folders)) #check how many files
	for subj_folder in subj_folders:
		path_to_dir=os.path.join(location, subj_folder) #the path to this subj folder
		files_in_dir=os.listdir(path_to_dir)
		if subj_folder not in good_subj.values: #remove if not a good subject
			print(subj_folder)
			for file in files_in_dir:# loop to delete each file in folder
			   os.remove(f'{path_to_dir}/{file}')     # delete file
			os.rmdir(path_to_dir)                      # delete folder
		elif len(files_in_dir)<2 or len(files_in_dir)>3: #check number of files
			print(path_to_dir)
	print("Finished folder")

###
#rename files of session3 from 1 to 3, due to mistake in encoding on server.
###
location=os.path.join(path_to_data,'session3_results') #create the path string
os.chdir(location)
folders=listdir()
for sub_folder in folders:
	path_to_dir=os.path.join(location, sub_folder) #the path to this subj folder
	files_in_dir=os.listdir(path_to_dir)
	#for file in files_in_dir:
		#new=file.replace('1','3',1)
		#os.rename(os.path.join(path_to_dir, file),os.path.join(path_to_dir, new))

###
#check combined folder
###
location=os.path.join(path_to_data,'all_results') #create the path string
os.chdir(location)
folders=listdir()
print(len(folders))
for folder in folders:
	folder_path=os.path.join(location,folder) #create the path string
	os.chdir(folder_path)
	files=listdir()
	if len(files)!=8:
		print(folder)

###
#Change name to sub_XXX
###
os.chdir('C:\\Users\\ido\\Documents\\data\\temp')
folders=listdir()
for sub_num in range(11,11+len(folders)): #I have 10 subj from pilot
	if sub_num>=100:
		new_name='sub_'+str(sub_num)
	else:
		new_name='sub_0'+str(sub_num)
	os.rename(os.path.join(os.getcwd(),folders[sub_num-11]),os.path.join(os.getcwd(),new_name))

###
#Get bonus for each subject
###
os.chdir('C:\\Users\\ido\\Documents\\data\\\\all_data_07_21_1\\all_results')
folders=listdir()
bonus=pd.read_csv('C:\\Users\\ido\\Downloads\\total_bonus.csv')
bonus['prolific']=folders
bonus.to_csv('bonus.csv')

###
#Create demographic data
###
###
#Get bonus for each subject
###
os.chdir('C:\\Users\\ido\\Documents\\data\\\\all_data_07_21_1\\all_results')
folders=listdir()
df=pd.DataFrame(data=folders,columns=['participant_id'])
df["sub_num"]=range(11,175)
demographic=pd.read_csv('C:\\Users\\ido\\Documents\\data\\all_data_07_21_1\\demographic1.csv')
demographic['sub_num']=df[df['prolific']==demographic['participant_id']][['sub_num']]
