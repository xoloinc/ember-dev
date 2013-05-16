var App = Ember.Application.create({
	ready: function(){
		
	}
});
App.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return users;
	}
})
var users=[{
	id:1,
	first:"Marcus",
	last:"Johansson"
},{
	id:2,
	first:"kalle",
	last:"kalleson"
},{
	id:3,
	first:"ada",
	last:"adamsson"
}
]