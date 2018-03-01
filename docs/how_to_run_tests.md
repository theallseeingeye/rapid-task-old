How To Run Tests
================

This step is crucial to running before deploying or finalizing changes for uploads to github.

Front-End
---------

Simply type: ```yarn jest```  

The testing platform we are using is built by facebook called Jest. For more information please visit: 
https://facebook.github.io/jest/

For coverage, type in the terminal: ```yarn jest -- --coverage```  

Snapshots will take a copy of a js styling. When you run the test again it will look at the taken snap shot and compare
to the one just run. You can verify if it was intentional or not. If wanting a change: jest -u to overwrite the existing
snapshot.
      

Back-End
--------

Simply type: ``````


#### For check of code coverage by tests

##### Requirements:  
 coverage.py https://coverage.readthedocs.io/en/coverage-4.5.1/

Should be already include in the requirements- simply type ```pip install```. If not, then install directly ```pip install coverage```  

For a list of commands:  ```coverage help```  
        
Start and run a test at the command-line in the project root directory:   
   * ```coverage run manage.py test --settings=config.settings.test``` 
     
For test results without admin:  
   * ```coverage html --omit="admin.py"```  
        * Then this will create a directory with html that has the coverage report.
   
To look at the generated html report (after using html) go to website/htmlcov/index.html. it shows the coverage report.