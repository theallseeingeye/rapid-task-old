THINGS TO DO
============


Monitoring
----------
* Review monitoring tools- Google Analytics and Fullstory. Check server access and log errors regularly (Heroku and AWS).


Tests
-----
* We need to set up the tests and make sure there are no errors. There are some errors that needs configuration to work
with babel and so on.  

* We need to write tests for the connection of the databases.


Security
--------
* We need to check if the form inputs are exactly sanitized


Deployment
----------
* Deployment is tedious and we should find a better way to setup github with master and staging to work with auto deploy
to the buckets.  


Production
----------
* The Service Worker manifest is not loading up the url. See google lighthouse audit for further info.
* Must extend the cache time on production and the backend.

* We need to adjust and fix the svg's in Microsoft EDGE. Doesn't accept css transform or something along the lines.

* Need to create a dynamic sitemap generator. React-router-sitemap only works for router v3 or lower. We have v4, so 
    in the mean time we may need to hardcode or create our own. 
    
* Bing: add sitemap for them to crawl. *Update- Submitted, will need to check back on status.
    

The following is best practices for google SEO https://support.google.com/webmasters/answer/7451184?hl=en&ref_topic=3309469
* Create a structured data script for google search engine
* Need to create a robots.txt for google's bots. We will want to block sensitive parts of the website.
* Place unique title on each page we create for google SEO. This goes along with the description meta tag also.






If Rapid Task Moves
-------------------

* Update new ip address to block at Google Analytics 
* Add address to Google's ld+json structured data
 