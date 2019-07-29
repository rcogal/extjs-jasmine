# Unit testing in extjs using jasmine
Basic integration of Jasmine in ExtJS framework. Allows developer to simply test the controller methods

# What's needed
  - ExtJS 6
  - Sencha CMD (and its dependencies)
  - [Jasmine Standalone](https://github.com/jasmine/jasmine/releases)
  - Please refer to extjs framework more additional packages needed

# Setup

1. Create a workspace
    ```
    > sencha generate workspace /path/to/workspace
    ```
2. Generate an application inside of the workspace. In this case, MyApp is the name of the application
    ```
    > sencha generate app --ext MyApp /path/to/workspace/<your application folder>
    ```
3. Download the jasmine standalone and place it inside of the workspace
4. After doing the step 3, make sure to update the **boot.js** inside of the jasmine standalone library
    ```sh
        //** COMMENT THIS CODE
        // window.onload = function() {
        //   if (currentWindowOnload) {
        //     currentWindowOnload();
        //   }
        //   htmlReporter.initialize();
        //   env.execute();
        // };
        
        //** ADD THIS CODE IN THE BOOT.JS
        window.jasmine.htmlReporter = htmlReporter;
    ```
    
    > NOTE: Pay attendion to these comments //** 
    
5. Create a specs folder inside of your *MyApp* application. Specs contains all your unit test.
    > NOTE: Please check the specs folder in this repo. You can structure your specs folder based on your preference but make sure to update the necessary path for test suite.

6. Create a sample truthy method on your controller to test your specs. Currently, in this repo, we have a method the _**getTruthyTest**_ inside of the *view/main/MainController* as an example for testing the spec.

    ```sh
    getTruthyTest: function () {
        return true;
    }
    ```

7. On your generated application, copy and rename the app.js to appTest.js. After that, add a new method **launch** with the code below
    ```sh
    //** COMMENT THIS LINE
    // mainView: 'MyApp.view.main.Main',
    
    launch: function () {
        var jasmineEnv = jasmine.getEnv();
    
        jasmine.htmlReporter.initialize();
        jasmineEnv.execute();
    }
    ```
    
    > NOTE: Pay attention to this comment //**
8. Open your app.json and update the follow property
    
    ```sh
    
    "classpath": [
        "app",
        "specs"
    ],
    
    "js": [
        {
            "path": "appTest.js", //** I have changed this from app.js to appTest.js
            "bundle": true
        }
    ]
    
    ```
    
    > NOTE: add **specs** on the classpath property

9. Update the **Application.js** with the code below
    
    ```sh
    //** ADD THIS ON TOP OF THE CODE
    Ext.Loader.setPath({
        enabled: true,
        'TestSuite.specs': 'specs'
    });

    //** ADD THIS PROPERTY INSIDE OF THE - MyApp.Application
    requires: ['TestSuite.view.main.Main'],
    ```
    
10. Include the jasmine css and js file in the index.html
    ```sh
    <link rel="stylesheet" href="../jasmine-standalone-3.4.0/lib/jasmine-3.4.0/jasmine.css">

    <script src="../jasmine-standalone-3.4.0/lib/jasmine-3.4.0/jasmine.js"></script>
    <script src="../jasmine-standalone-3.4.0/lib/jasmine-3.4.0/jasmine-html.js"></script>
    <script src="../jasmine-standalone-3.4.0/lib/jasmine-3.4.0/boot.js"></script>

    ```
    > NOTE: make sure that the folder name of your jasmine is correct.
11. Lastly, open your command prompt and run the code below
    ```
    > sencha app watch development
    ```
