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
		reviews : [ {
			by : "RK",
			rating : "5",
			comments : "This is a comment",
		} ],
	}, {
		name : 'Drogo',
		price : 100,
		description : 'Another gem from Game of thrones',
		canPurchase : true,
		soldOut : false,
		reviews : [ {
			by : "RK",
			rating : "5",
			comments : "This is a comment",
		} ],
	} ];
	app.controller("panelController", function() {
		this.tab = 3;
		this.selectTab = function(selectTab) {
			this.tab = selectTab;
		};
		this.isSelected = function(selectedTab) {
			return this.tab == selectedTab;
		};

	});
	
	app.controller('reviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		}
	});
	
})();
