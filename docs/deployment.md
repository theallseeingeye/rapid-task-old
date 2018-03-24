INSTRUCTIONS TO DEPLOY
======================

The Rapid Task react.js build will be hosted as static on AWS S3. This is faster and cheaper than trying to host a server
sided react.js, where it will a EC2 instance which costs more $$$. We may consider switching the app to server sided rendering
with a trade off for better SEO and faster initial page load.  

Test staging before deployment  
------------------------------
Before full production, lets deploy the site to staging and test to make sure it is working. There is a AWS bucket called
staging.rapidtask.com to help up play around and make sure it is working before publishing to production of rapidtask.com.

The staging.rapidtask.com will have the same settings as production, except for the cache expiration time.


AWS Deployment Setup  
--------------------
The React.js bundle we create will be hosted as a static page on AWS S3. Then we deploy the S3 over the AWS CloudFront.  

## Here are the configured S3 bucket settings;

### CORS CONFIG:  
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod> 
    <MaxAgeSeconds>30</MaxAgeSeconds>
    <AllowedHeader>Authorization</AllowedHeader>
    <AllowedHeader>Content-Length</AllowedHeader>
</CORSRule>
</CORSConfiguration>

** Note- We will want to increase the MaxAgeSeconds when we go to production.

### BUCKET POLICY:  
Used the default settings and have the Effect "Allow"

### Static Settings:  
Under the bucket go to: `properties/Static website hosting`.  
We need to make sure that the index.html is under BOTH `Index Document` and `Error Document`. The Error Document requires
the index.html for the React Router to find the urls. All the url directories are in the index.html. Required for static
hosting of react.js.


## Here are the configured CloudFront Settings:  

General:  
![CloudFront General Settings](/docs/images/CloudFront-General-Settings.png)
Origins:  
No changes  
Behaviors:  
![CloudFront General Settings](/docs/images/CloudFront-Default-Cache-Behavior-Settings.png)  
Error Pages:  
This is required to help React Router find the extended urls. It Redirects the server to look at the index.html to find
the paths required. Therefore we created a new custom error response.  
![CloudFront General Settings](/docs/images/CloudFront-Custom-Error-Response-Settings.png)  

AWS Uploading Files  
-------------------

We need to make sure we have all the files to upload to AWS. The staging.rapidtask.com should take immediate effect, unless
the file size of the change is large- then the CloudFront will take longer to update all of it's distributions.

