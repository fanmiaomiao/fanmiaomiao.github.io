$('.ex[name=5] .fsbanner').fsBanner({
	trigger: 'mouse',
	toUpdate: { 
		title: '.ex[name=5] .mytitle',
		description: '.ex[name=5] .mydescription'
	},
	hideParent: '.ex[name=5] .myparent'
});
