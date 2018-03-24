THINGS TO DO
============


Monitoring
----------
* Find and install some monitoring tools. Check server access and log errors regularly.


Tests
-----
* We need to set up the tests and make sure there are no errors. There are some errors that needs configuration to work
with babel and so on.  

* We need to write tests for the connection of the databases.


Security
--------
* We need to update the dependencies- There is one with vulnerability risks. Github points to a dependency that needs
updating.  


Deployment
----------
* Deployment is tedious and we should find a better way to setup github with master and staging to work with auto deploy
to the buckets.  

* The webpack doesn't package everything into the dist folder on `yarn build`.  


Production
----------
* The Service Worker manifest is not loading up the url. See google lighthouse audit for further info.