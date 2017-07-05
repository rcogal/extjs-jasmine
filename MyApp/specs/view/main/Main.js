Ext.define('TestSuite.view.main.Main', function() {

    describe('# Main panel', function() {

    	var mainPanel;
    	var mainController;


    	beforeEach(function(){
    		mainPanel = Ext.create('MyApp.view.main.Main');
    		mainController = mainPanel.getController();
    	});

    	afterEach(function () {
    		mainPanel.destroy();
    	});

        it('Get the truthyTest function in main controller', function() {
            expect(mainController.getTruthyTest()).toBe(true);
        });

        it('Check the home pane if defined in tabpanel', function () {

        	var home = mainPanel.down('#home');

        	expect(home).toBeDefined();

        });

        // Other test here....
    });

    // to  avoid errors since it's expecting object
    return {};

}());