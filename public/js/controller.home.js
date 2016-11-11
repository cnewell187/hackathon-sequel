angular.module('TardeApp')
    .controller('homeController', homeController);
// angular.module('TardeApp')
//     .config(router);


// router.$inject = ["$routeProvider"];

// function router ($routeProvider){
//     .when('/home', {
//         templateUrl : '../public/templates/home.html'
//     }),
//     .when('/users', {
//         templateUrl : '../public/templates/users.html'
//     })
// };

// homeController.$inject = ['usersFactory', 'classFactory',];

function homeController (usersFactory, classFactory){
    var home = this;
    home.newUser = {};
    home.user = {};
    home.userList = [];
    home.greeting = 'Welcome to the Users of AJAX!';

    // usersFactory.createUser().then

    classFactory.getClasses()
        .then(function(returnData){
            console.log('Classes!', returnData.data)
            home.classes = returnData.data
        });

    home.createUser = function(){
        usersFactory.createUser(home.newUser)
            .then(function(returnData){
                console.log('Response from server : ', returnData)
                home.newUser = {}; // reset the form
                home.getUser();
            });
    }

    home.getUser = function(userID){
        usersFactory.getUser(userID)
            .then(function(returnData){
                if(returnData.data.length){
                    // if array (has length), store in userList
                    home.userList = returnData.data;
                }
                else{
                    // if not, store in user
                    home.user = returnData.data;
                }
            })
    }
    home.getUser(); // get many
}

    // home.getUser("581a2941fba8172b747af12f"); // get one
