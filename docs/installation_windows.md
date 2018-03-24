HOW TO INSTALL RAPID TASK FOR WINDOWS
=====================================

Welcome to the installation manual to have Rapid Task up and running! 

Table of Contents
-----------------
Setup Frontend


Setup for Front-end
-------------------

#### For Pycharm Users:  
You may need to change some settings in the editor to help make your work flow easier for the frontend.
* The default tab and spaces for js and scss is 4 spaces. You can change those under: 
```File/Settings/Editor/Codestyles```  
    * Under CSS, SCSS and JS: Change all the tabs, spaces and continuation indent to two spaces.  
* The npm start uses a watcher and the IntelliJ has a setting that breaks it. We need to turn it off.  
    * Go to: ```File/Settings/Appearance & Behavior/System Settings``` and *uncheck* the box for: ```use "safe write"```.  
* Install the styled-components plugin so the syntax readers can assist.  
    * Go to: ```File/Settings/Plugins``` and search "styled-components" by webstorm and install. 
* Since we are using Node.js, Pycharm has a plugin that helps handle it: ```File/Settings/Editor/Plugins``` and 
    install ```nodejs``` by Jetbrains.
        
###Installation Steps
  
1. You will need to have node.js installed.  
    * You need the latest [version 8](https://nodejs.org/dist/v8.9.1/node-v8.9.1-x64.msi) from
https://nodejs.org/en/

1. We will need a package manager. Can use either NPM or Yarn. This project is currently setup with Yarn. You can
    install Yarn globally on your machine: [Yarn Page](https://yarnpkg.com/en/)
    
1. Install dependencies. Use the package manager by typing ```yarn install``` or if using npm ```npm install```.

1. (Optional) If you would like to preview the development server on a different device over the local network, you
    must change the ip settings in the webpack. First we need to find your local network ip. On windows, open the cmd
    and use the command ```ipconfig```. Locate and copy the IPv4 address and replace the existing ```host:``` in the
    webpack.dev.js file. Now you can open on your phone as that ip address following the port (:3000).
   
## Gotchas:  
1. Make sure the `webpack.dev.js` has the right ip address. `use ipconfig` in `cmd` to ensure that the `ipv4` is matching
    with the `host: 111.111.111.1` under devServer settings.
1. Make sure you are under the folder `frontend` before doing any yarn commands. You need to be in the directory that
    has the package.json to do any actions.  

