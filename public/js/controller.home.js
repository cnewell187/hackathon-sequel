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
    home.greeting = 'Welcome to A.S.S.';

    // usersFactory.createUser().then



  

    home.getUser = function(){
        usersFactory.getUser()
            .then(function(returnData){
                if(returnData.data.length){
                    // if array (has length), store in userList
                    home.userList = returnData.data;
                    console.log(returnData.data)
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
