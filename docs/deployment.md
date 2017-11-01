INSTRUCTIONS TO DEPLOY
======================

Items to put into gitignore file
--------------------------------


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
