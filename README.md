![Rapid Task Logo](/docs/images/logo.png)

Welcome to Rapid Task's Manual
==============================

---
### Important Notes Before Starting...
* [Editing these documents?](#editing-these-documents)  
**Pycharm users**: Install the "Markdown Support" plugin by Jetbrains. This provides a live preview of the .md documents.
*Note:* .md Links and indexes do not work in Pycharm, but does in GitHub.  

---
Table of Contents
-----------------
* [Installation](#installation)    
* [Development Mode](#development-mode)  
* [Running Tests](#running-tests)  
* [Deployment](#deployment) 



# Installation 
First time setup will need to follow the installation documentation:
[Windows Installation](/docs/installation_windows.md) or [OS X Installation](/docs/installation_osx.md)


# Development Mode <a id="developmentmode"></a>

Backend
-------
During development the local, testing, staging and production settings will be different. This is due ease of developing
on localhosts and requires different setup from production servers. You will need to make sure you are working in the
right settings at the appropriate stage of the development. Here are the **command lines** to set the right settings 
when you are running server:
* Local: ```python manage.py runserver --settings=config.settings.local```  
* Test: ```python manage.py runserver --settings=config.settings.test```  
* Staging: ```python manage.py runserver --settings=config.settings.staging ``` 
* Production: ```python manage.py runserver --settings=config.settings.production```  
    *Note: Look at the notes after you run server to ensure you are using the right settings path.*   
     
Downloading requirements files:
* When you modify or adjust dependencies for the project, we use the following **command lines**:  
  * Local: ```pip install -r requirements/local.txt```
  * Test: ```pip install -r requirements/test.txt```
  * Staging: ```pip install -r requirements/staging.txt```
  * Production: ```pip install -r requirements/production.txt```
  
Updating to the requirement files:
* Ensure they are requirements that are used- not cluttered with junk
   * In command line in your virtual environment: pip freeze > requirements/local.txt
      * Can replace local.txt with other versions such as test, staging and production.

#### Running Backend Server
* Make sure you are in the backend project folder. The root is /backend.
    * Terminal command: ```python manage.py runserver```  

Frontend 
--------

#### Running Frontend Server
* Make sure you are in the frontend project folder directory. The root is /frontend.
    * Terminal command: ```npm run start```


# Running Tests <a id="running-tests"></a>

Backend
-------
If you haven't yet installed coverage.py: ```pip install coverage```  

For a list of commands:  ```coverage help```  
        
Start and run a test at the command-line in the project root directory:   
   * ```coverage run manage.py test --settings=config.settings.test``` 
     
For test results without admin:  
   * ```coverage html --omit="admin.py"```  
        * Then this will create a directory with html that has the coverage report.
   
To look at the generated html report (after using html) go to website/htmlcov/index.html. it shows the coverage report.

Frontend
--------

The tests and coverage uses Jest: https://facebook.github.io/jest/   
For tests, type in the terminal: ```npm test```   
For coverage, type in the terminal: ```npm test -- --coverage```  

Snapshots will take a copy of a js styling. When you run the test again it will look at the taken snap shot and compare
to the one just run. You can verify if it was intentional or not. If wanting a change: jest -u to overwrite the existing
snapshot.
      

## Deployment <a id="deployment"></a>

Before running migrations on production server, always test the migrations on the staging server to have an idea how
long it will take. Backup the data before doing any kind of migrations.

---

# Appendix

#### Editing these documents?

These documents MUST follow these simple syntax rules to retain it's formatting for users to easily read. It uses the
"Markdown" or ".md" formats, or more specifically, "GitHub Flavored Markdown". Markdown provides us a simple syntax 
formatter to build the documentation and can easily be converted into html.  

Markdown guides at these links:
* Github's Standards We Follow: https://guides.github.com/features/mastering-markdown/   
* Markdown Manual: http://markdown-guide.readthedocs.io/en/latest/index.html  
* Markdown Tutorial: http://tylingsoft.com/tutorial.md/#whats-markdown

**Pycharm users** have an option to download a Markdown Viewer. The internal links and interactive functions will not 
work, but still works on GitHub. Install by using Pycharm following: ```file/settings/editor/plugins```. Then find 
"Markdown Support" by IntelliJ products and install it. 
