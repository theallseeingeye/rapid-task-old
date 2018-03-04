INSTRUCTIONS TO DEPLOY
======================

Items to put into gitignore file
--------------------------------


BACK-END DEPLOYMENT
===================

Before doing any deployment, please run your tests ```python manage.py test``` and check 
deployment security ```python manage.py check --deploy```

### To Re-Deploy to Existing

Simply in the environment type: `eb deploy`

### New Deployment Steps
* Now we need to use the EB Command Line Interface  
Requirement: awsebcli 
awsebcli should be installed globally, NOT in the virtual environment. Verify by ```eb --version``` if not, ```pip install awsebcli```    
* Setting up the Elastic Beanstalk Environment 
    Use the command ```eb init``` (Make sure you are deactivated from the environment)   
    Then follow the steps:
    * Select a default region: `3`  
    * Enter your aws IAM user credentials - If you do not have one- see Jay 
    * Select: Create a new application
    * enter application name (`rapid_task_backend`)
    * It will ask if you are using python, say `y`
    * Select the correct python version (this case is 3.6)
    * will ask about codeCommit- just skip for now `n`
    * Agree to set up the SSH- `y`
    * Create a keypair name- Used the default name `aws-eb`
    * (error) Ran into the error: ERROR: CommandError - SSH is not installed. You must install SSH before continuing.
        * To resolve:  
            * For windows 10- Make sure you have the latest updates
            * Microsoft has a beta version of ssh available- will have to enable it
            * Enable developer mode - You can find this under ```Update & Security``` section in ```Settings```  
            * Open ```Manage Optional Features``` - Can run in search from `Start Menu` search.
            * Click `Add a feature` then add the `OpenSSH Server(Beta)` and `OpenSSH Client(Beta)` and restart pc
            * After install and restart- Enter in the command line ```ssh``` and it should show results.
            
            * For windows, install PuTTY from https://www.ssh.com/ssh/putty/download 
            (for more information: https://www.ssh.com/ssh/putty/windows/puttygen)
            * Follow Through PuTTY installation
            * Follow AWS steps: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html
            * The steps above should show you how to create a key and your should be able to fined that 
    * Now you have built an virtual environment instance for AWS
    * Next you need to create a webserver in the environment
    * Type `eb create`, and give a name for each
    * All done! You have created it!
    * run `eb open` to make sure django is working.
    * If you need to make changes or update the django- type `eb deploy` to apply them.
    
 
  



Test staging before deployment
------------------------------
Before full production, lets deploy the site to staging and test for vulnerabilities.
    * Use this https://www.ponycheckup.com which probes the site from the outside and reports back.
    * Run Mozilla's security scan https://observatory.mozilla.org/ This is non-django specific and seems underdeveloped

Security Notices
----------------
* Make sure DEBUG = FALSE in the settings before deployment
* Make sure the SECRET_KEY is hidden
* Make sure all the API keys are hidden
* Make sure we are deploying on HTTPS, to block credentials sniffers between the site and end users.
