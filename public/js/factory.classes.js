angular.module('TardeApp')
    .factory('classFactory', classFact);

classFact.$inject = ['$http'];

function classFact ($http) {

    return {
        getClasses : function(){
            return $http.get('/api/classes')
        }
    }
}
