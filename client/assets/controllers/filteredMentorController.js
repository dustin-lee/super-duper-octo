
myApp.controller('filteredMentorController', ['mentorFactory', '$location', '$routeParams', '$filter', filteredMentorController]);

function filteredMentorController(mentorFactory, $location, $routeParams, $filter){
  var _this = this;
  // function setMentees(data){
  //   _this.mentees = data;
  //   _this.mentee = {};
  // }
  // this.mentees = {};
  // this.mentee = {};

  // mentorFactory.getmentees(setMentees);

  function filteredmentors(user){
    mentorFactory.filteredmentors(this.mentor, function(data){
      _this.mentors=data;
      console.log(data)
    })
  }
  filteredmentors();

}
