HOW TO INSTALL RAPID TASK
=========================

Welcome to the installation manual to have Rapid Task up and running! 

Setup for Installation
----------------------
You will need to have your system setup with Python and virtualenv installed.  
    Instructions are [here](/docs/python_installation.md) for these following steps:
1. Have Python 3.6.3 installed. 
[Download Link](https://www.python.org/ftp/python/3.6.3/python-3.6.3.exe). 
1. Have virtualenv 15.1.0 installed. See ["Setting up the Virtual Environment"](/docs/python_installation.md) in
    python_installation.md

Also install these:
1. Have git installed on to your computer if you don't have it already. [Git Home Page](https://git-scm.com/)
1. (Optional) Have Pycharm installed. [Pycharm Home Link](https://www.jetbrains.com/pycharm/)
    
Installation Steps
------------------
**If using Pycharm:** 
1. Open Pycharm.
1. Setup Git on Pycharm
    1. File>Settings>Version Control>Git
    1. Select: Path to Git Executable and point it to your location of git.exe installed. (Default: *c:/Program Files/Git/cmd/git.exe*) 
    1. Click test to see if it works
1. Setup your GitHub on Pycharm
    1. File>Settings>Version Control>GitHub
    1. Enter the following:
        1. Host: github.com
        1. Auth Type: Token
        1. Click Create API Token
        1. Enter your credentials
        1. Click test to ensure it worked
1. Then in the menus- open *VCS/Check out From Version Control/GitHub*  
    * Git Repository URL: git@github.com:rapidtask/website.git 
    * Parent Directory: *Choose a path to store the files*
    * Directory Name: website    
    ***Review the github_tutorial doc as needed**  
1. Create a secret key file
    1. under root of project, create "secrets.json"
    * Enter the following in the secrets.json:  
    ```
    {   
    "FILENAME": "secrets.json",    
    "SECRET_KEY": "*Your secret key must be placed here!*",  
    "DATABASES_HOST": "127.0.0.1",  
    "PORT": "5432"  
    }
    ```
        

**If not using pycharm:**
3) Download the Rapid Task github repository from......




**NEXT STEPS**
1) Activate your virtualenv
2) In the directory you wish to install, using command-line:
    pip install -r /website/requirements/local.txt



**Important first time setup!**

Your secret_key is not setup. You will need to set it up following these instructions below.

Set up your secret_key to keep it hidden. You do not want to share your secret_key given to you by django.

* create a file named "secrets.json" under the root folder of the project (location important so it can be located)
* Enter the following in the secrets.json:  
    ```
    {   
    "FILENAME": "secrets.json",    
    "SECRET_KEY": "*Your secret key must be placed here!*",  
    "DATABASES_HOST": "127.0.0.1",  
    "PORT": "5432"  
    }
    ```
* Replace the secret_key field with your given secret key.  
* Make sure this file is in .gitignore - `````/secrets.json````` (VERY IMPORTANT)  
* The base.py settings has a look up to find this file.  
* Do not misplace your secret key. If you suspect or accidentally shown the secret key publicly
  PLEASE ALERT US! This is a SEVERE security risk and will need to create a new secret key.
