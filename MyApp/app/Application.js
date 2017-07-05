/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */


Ext.Loader.setPath({
    enabled: true,
    'TestSuite.specs': 'specs'
});

Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',


    requires: ['TestSuite.view.main.Main'],

    name: 'MyApp',

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
