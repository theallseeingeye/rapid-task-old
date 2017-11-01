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

    
Installation Steps
------------------
**If using Pycharm:** 
1. Open Pycharm.
1. Then in the menus- open *VCS/Check out From Version Control/GitHub*  
    * Host:   
    *   
    *  
    *    
**Review the github_tutorial doc as needed**

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