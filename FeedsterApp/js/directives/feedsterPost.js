app.directive('feedsterPost', function(){
	return{
		restrict: 'E',
		scope: {
			posts: '=info'
		},
		templateUrl: 'js/directives/feedsterPost.html'
	}
});