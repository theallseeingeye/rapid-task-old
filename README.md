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
These instructions applies to those who needs to work with a database during development:  

You will need to go to the `Backend` Repository and follow the installation/setup instruction.  

Frontend 
--------
#### Running Frontend Server
* Make sure you are not in an virtual environment. If you are, type ```deactivate``` in the terminal. (This applies to
those who are using the python backend server).  
* Check that you are in the frontend project folder directory. The root is /frontend.
* Check the `webpack.dev.js` folder and that the `host:` setting is the same as your local ip. 
* Install the dependencies with terminal command: `npm install` or `yarn install`. 
* Then use this command to start the server:
    * Terminal command: ```npm run start``` or ```yarn start```


# Running Tests <a id="running-tests"></a>
Please view the [How to run Tests](/docs/how_to_run_tests.md) documentation.

# Deployment <a id="deployment"></a>
Please view the [Deployment](/docs/deployment.md) documentation.

------------------------------------------------------------------------------------------------------------------------

# Appendix

#### Editing these documents? <a id="editingthesedocuments"></a>

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
