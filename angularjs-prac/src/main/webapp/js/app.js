/**
 * Angular JS modules
 */
(function() {
	var app = angular.module('store', []);
	app.controller("StoreController", function() {
		this.products = gems;
	});
	var gems = [ {
		name : 'Dothraki',
		price : 2.95,
		description : 'Game of thrones Gem',
		canPurchase : true,
		soldOut : false,
	}, {
		name : 'Drogo',
		price : 100,
		description : 'Another gem from Game of thrones',
		canPurchase : true,
		soldOut : false,
	} ]
	app.controller("panelController", function() {
		this.tab = 1;
		this.selectTab = function(selectTab){
			this.tab=selectTab;
		};
		this.isSelected = function(selectedTab){
			return this.tab == selectedTab;
		};
		
	})
})();
