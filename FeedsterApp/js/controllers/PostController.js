app.controller('PostController', ['$scope', function($scope){
	$scope.posts = [
		{
			author: {
				name: 'Lauro Sanchez',
				avatar: 'img/cbj.svg',
			},
			comment: {
				img: 'img/dog.jpg',
				text: 'How much for that dogg in the grass?',
			}
		},
		{
			author: {
				name: 'Laura Sopas',
				avatar: 'img/mh.svg',
			},
			comment: {
				text: 'I used to have a recurring dream when I was chiquita.',
			}
		}
	];
	}
]);
