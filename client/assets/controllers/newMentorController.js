
myApp.controller('newMentorController', ['mentorFactory', '$location', '$routeParams', newMentorController]);

function newMentorController(mentorFactory, $location, $routeParams){
  var _this = this;
  function setMentors(data){
    _this.mentors = data;
    _this.mentor = {};
  }
  this.mentors = {};
  this.mentor = {};

  mentorFactory.getmentors(setMentors);

  this.registerMentor = function(){

    var result0 = document.getElementsByClassName('chip')[0].innerText
    var result1 = document.getElementsByClassName('chip')[1].innerText
    var result2 = document.getElementsByClassName('chip')[2].innerText

    result0 = result0.substring(0, result0.length - 5)
    result1 = result1.substring(0, result1.length - 5)
    result2 = result2.substring(0, result2.length - 5)

    var result = [result0, result1, result2]
    this.mentor.background = result

    mentorFactory.registerMentor(this.mentor, function(data){
      console.log("passed")
      if(data.hasOwnProperty('errors')){
        this.regErrors = data.errors
      } else {
        console.log(this.mentor)
        $location.path('/mentor/platform');
      }
    })
  }

  this.loginMentor = function(user){
    mentorFactory.loginMentor(user, function(data){
      if(data.hasOwnProperty('errors')){
        this.loginErrors = data.errors
        } else {
          $location.path('/mentor/platform/'+id);
        }
      })
    }

    this.logout=function(){
      mentorFactory.logoutTwo(this.user, function(data){
        this.users=data;
        $location.path('/');
      })
    }


  // this.editmentor = function(){
  //   mentorFactory.editmentor(this.mentor);
  // };
  //
  // this.showmentor = function(){
  //   mentorFactory.showmentor($routeParams.id, this.mentor);
  // };
  //
  // this.deletementor = function(id){
  //   mentorFactory.deletementor(id,setMentors);
  // };
}
