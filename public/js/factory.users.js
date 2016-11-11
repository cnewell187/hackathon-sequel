angular.module('TardeApp')
    .factory('usersFactory', usersFactory);

usersFactory.$inject = ['$http'];

function usersFactory ($http) {

    return {



        getUser : function(){

            return $http.get('/attendanceInfo')
        }

    }
}
