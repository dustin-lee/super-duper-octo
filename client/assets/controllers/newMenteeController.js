
myApp.controller('newMenteeController', ['mentorFactory', '$location', '$routeParams', newMenteeController]);

function newMenteeController(mentorFactory, $location, $routeParams){
  var _this = this;
  function setMentees(data){
  console.log(data)
    _this.mentees = data;
    _this.mentee = {};
  }
  this.mentees = {};
  this.mentee = {};

  mentorFactory.getmentees(setMentees);

  this.registerMentee = function(){
    var result0 = document.getElementsByClassName('chip')[0].innerText
    var result1 = document.getElementsByClassName('chip')[1].innerText
    var result2 = document.getElementsByClassName('chip')[2].innerText

    result0 = result0.substring(0, result0.length - 5)
    result1 = result1.substring(0, result1.length - 5)
    result2 = result2.substring(0, result2.length - 5)

    var result = [result0, result1, result2]
    this.mentee.background = result

    mentorFactory.registerMentee(this.mentee, function(data){
      if(data.hasOwnProperty('errors')){
        this.regErrors = data.errors
      } else {
        $location.path('/mentee/platform');
      }
    })
  }

  this.loginMentee = function(user){
    mentorFactory.loginMentee(user, function(data){
      console.log("in the mentee login controller")
      if(data.hasOwnProperty("errors")){
        console.log('errors in login mentee')
        this.loginErrors = data.errors
        } else {
          $location.path('/mentee/platform/'+data._id);
        }
      })
    }

    this.logout=function(){
      mentorFactory.logout(this.user, function(data){
        this.users=data;
        $location.path('/');
      })
    }
  // this.editmentee = function(){
  //   mentorFactory.editmentee(this.mentee);
  // };
  //
  // this.showmentee = function(){
  //   mentorFactory.showmentee($routeParams.id, this.mentee);
  // };
  //
  // this.deletementee = function(id){
  //   mentorFactory.deletementee(id,setMentees);
  // };



}
