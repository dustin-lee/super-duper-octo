myApp.controller('showMenteeController', ['mentorFactory', '$location', '$routeParams', showMenteeController]);

function showMenteeController(mentorFactory, $location, $routeParams){
  var _this = this;

  function showmentee(){
    mentorFactory.getmentee($routeParams.id, function(data){
      _this.Mentee=data;
    })
  }
  showmentee();
}
