myApp.factory('mentorFactory', ['$http', function($http){
var factory = {}

factory.getmentors = function(id, callback){
  $http.get('/mentor/platform/'+id).then(function(returned_data){
    console.log(returned_data.data);
    callback(returned_data.data);
  })
}

factory.getmentees = function(id, callback){
  $http.get('/mentee/platform/'+id).then(function(returned_data){
    console.log(returned_data.data);
    callback(returned_data.data);
  })
}

factory.registerMentor = function(user, callback){
  $http.post('/mentor', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.registerMentee = function(user, callback){
  $http.post('/mentee', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginMentor = function(user, callback){
  console.log('login Mentory Factory')
  $http.post('/mentor/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginMentee = function(user, callback){
  console.log('login mentee Factory')
  $http.post('/mentee/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.filteredmentees = function(user, callback){
  $http.post('/mentor/filteredmentees', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.filteredmentors = function(user, callback){
  $http.post('/mentor/filteredmentors', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

// factory.getmentor = function(id, callback){
//   $http.get('/getmentor/'+id).then(function(returned_data){
//     callback(returned_data.data);
//   })
// }

// factory.show = function(id, callback){
//   $http.get('/codementor/'+id).then(function(returned_data){
//     callback(returned_data.data);
//   })
// }

factory.logout = function(user,callback) {
  console.log('logging out baby')
  $http.post('/logout', user).then(function(returned_data){
    callback(returned_data.data);
  })
}
factory.logoutTwo = function(user,callback) {
  console.log('logging out baby')
  $http.post('/logoutTwo', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.getit = function(callback){
  console.log("Hi i am in factory gettingmentees")
  $http.get('/mentor/filtermentees').then(function(returned_data){
    callback(returned_data.data);
  })
}


return factory;
}]);
