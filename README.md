# Integrating Unit-test in ExtJS using Jasmine

Jasmine integration on ExtJS Framework for unit testing. 

### What’s needed:
  - ExtJS 6 (okay to use old version)
  - Sencha CMD and its dependencies
  - Jasmine 2.6.4

### Setup
1. Create a [workspace](https://docs.sencha.com/cmd/guides/workspaces.html#workspaces_-_generating_a_workspace) on your local.
```
sencha generate workspace /path/to/workspace
```
2. Create a new application in the created workspace
```
sencha generate app --ext MyApp /path/to/workspace
````
3. Download the [Jasmine framework](https://github.com/jasmine/jasmine/releases) and put it inside your workspace (from step 1)
4. Update the boot.js and the code below
```
window.jasmine.htmlReporter = htmlReporter;
```
5. On your MyApp application - copy and rename the app.js to appTest.js and add a new method *launch* with the code below
```
launch: function () {
    var jasmineEnv = jasmine.getEnv();

    jasmine.htmlReporter.initialize();
    jasmineEnv.execute();
}
```
6. Update your *index.html* to create a reference from jasmine framework - Include the following links and scripts
```
    <link rel="stylesheet" href="../jasmine-lib/jasmine-standalone-2.6.4/lib/jasmine-2.6.4/jasmine.css">

    <script src="../jasmine-lib/jasmine-standalone-2.6.4/lib/jasmine-2.6.4/jasmine.js"></script>
    <script src="../jasmine-lib/jasmine-standalone-2.6.4/lib/jasmine-2.6.4/jasmine-html.js"></script>
    <script src="../jasmine-lib/jasmine-standalone-2.6.4/lib/jasmine-2.6.4/boot.js"></script>
```
7. Update the *app.json* 
** remove the app.js on the js config, and
** add the *appTest.js*
8. add your own specs for your unit testing. Please check the *MyApp/specs* folder on this repository
