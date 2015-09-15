// stub this in for now....
var envs = {
    local: {
        baseurl: "http://127.0.0.1:8000",
        token: "9604a3b6fbd2cddf8fe3cd79d3fde044be59db3b"
    },
    heroko: {
        baseurl: "https://rideplanner-api.herokuapp.com",
        //token: "e69045b10a60636c4e08071535980b22a3acc672" // colleen
        token: "e635eaca87430b92e4799cd7ddc89c4e0506c89d" // jon
    }
}

//var env = 'local';
var env = 'heroko';

angular.module('starter.services', ['ngResource'])
.factory('UserProfile', function($resource){

    var url = envs[env].baseurl + '/user_profiles/';
    var token = 'Token ' + envs[env].token;

  return $resource(url + ':user_id', {user_id: '@user_id'}, {
    update: {
      method: 'PUT',
      headers: { 'Authorization': token }
    },
    me: {
      method: 'GET',
      url: url + 'me',
      responseType: 'json',
      headers: { 'Authorization': token }
    }
  },{
  //  stripTrailingSlashes: false
  });
})
.factory('User', function($resource){

  var url = envs[env].baseurl + '/users/';
  var token = 'Token ' + envs[env].token;

  return $resource(url + ':user_id', {user_id: '@user_id'}, {
    update: {
      method: 'PUT',
      headers: { 'Authorization': token }
    }
  });
})
;
