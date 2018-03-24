ARCHITECTURE DESIGN AND GUIDELINES
===================================

This is a guideline that has design principles and description of the build. This provides understanding how things
evolved as the project grows and ages.

RULES
=====

Styling
-------
####Frontend Styling
* We will be using Styled-Components with react to implement css in the JavaScript. This decision will help keep the 
data contained by each React Components. The css names will have unique id's, which avoids naming conflicts. The Theme
Provider is implemented for global styles. Injected a normalized css
styling to the whole app. Three levels of styling: ```Injected Global > global-styles/DefaultTheme.js > local component
styling```. The Styled-Components can become powerful by using JavaScript functions with css.  
    * Only main concerns were for potential bugs and performance. Have found that we can fall back to regular style sheets
     if we are stuck with certain css implementation. When we do, we will have to watch our css names as it gets 
     compiled to one style sheet by webpack causing css name conflicts. It is hard to find benchmark results for the first paint
     performance of Styled-Components. With some on the web were able to set-up their own benchmark test and found 
     marginal ms differences comparing vanilla css and styled-components. If all fails, it won't be
     difficult to fall back to css style sheets, as most of it is already written in css and can copy/paste with small
     edits.
* Use Google's Styling guide: https://google.github.io/styleguide/htmlcssguide.html


Features to Consider for the Future
-----------------------------------
We want to keep this project scalable. Keep these features in mind as we add sections/modules to the project and ensure
that they can accommodate these in the future.  
    * We may want to consider implementing two-factor authentication option for users who wants more security.


Installed Packages Explanation
------------------------------
The installed packages must be written here with explanation for it's use. You must state the license use.
        *Before adding any packages, they must have a license and is approved by our Management*  
        
**FRONTEND**  

* Webpack  
    To compile javascipt into one bundle.js  
   * List of plug-ins:  
        * clean-webpack-plugin
            * to clean out the dist folder before every build
        * css-loader
            * Helps with @import and url()
        * file-loader
            * Tells webpack to produce the file and return public URL
        * html-webpack-plugin
            * Helps create the HTML files and templates one
        * style-loader
            * Adds CSS to the dom with < Style > tag
        * uglifyjs-webpack-plugin
            * Parse and compresses the JS
        * webpack-dev-server
            * A small server that provides live loading- Development only
        * webpack-merge
            * Merges configuration objects 
             
   License: MIT
       
* Babel  
    All required for React:
    * babel-core
    * babel-preset-env
    * babel-preset-react
    * babel-jest
    License: MIT    
* React  
    The JavaScript library   
    License: MIT 
* Styled-Components  
    New way of styling css-in-JS  
    License: MIT
    * babel-plugin-styled-components
        * For improvements Server Side Rendering and Minification.
    * jest-styled-components
        * allows testing of styling  
* Jest  
   Testing/coverage JavaScript Testing  
   * react-test-renderer  
        * Takes a snapshot of the DOM tree rendered by React DOM    
   License: MIT - Facebook     
* Axios
    Promise based HTTP client for the browser and node.js. Allows us to communicate with the backend api
    License: MIT 
* Validators
    A package that handles validators and sanitation of forms
    License: MIT