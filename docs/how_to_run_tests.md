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
      
