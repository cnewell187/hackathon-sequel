angular.module('TardeApp')
    .controller('homeController', homeController);

homeController.$inject = ['usersFactory', 'hqFactory'];

function homeController (usersFactory, hqFactory){
    var home = this;
    home.newUser = {};
    home.user = {};
    home.userList = [];
    home.greeting = 'Welcome to the Users of AJAX!';

    // usersFactory.createUser().then

    hqFactory.getHqs()
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
    // home.getUser("581a2941fba8172b747af12f"); // get one
