console.log("I'minit")
myApp.controller('filteredMenteeController', ['mentorFactory', '$location', '$routeParams', '$filter', filteredMenteeController]);

function filteredMenteeController(mentorFactory, $location, $routeParams, $filter){
  console.log("Inthefunc")
  var _this = this;
  console.log(mentorFactory);
  this.getit = function(){
    mentorFactory.getit(function(data){
      _this.mentees=data;
      console.log(data);
    })
  }
 this.getit();

}

  // function filterMentees(data){
  //   console.log('This is the data in the filteredMenteeController')
  //   console.log(data)
  //   _this.mentees = data;
  //   _this.mentee = {};
  // }
  // this.mentees = {};
  // this.mentee = {};
  //
  // mentorFactory.getit(filterMentees);
  // }



  // function setMentees(data){
  //   _this.mentees = data;
  //   _this.mentee = {};
  // }
  // this.mentees = {};
  // this.mentee = {};

  // mentorFactory.getmentees(setMentees);

  // function filteredmentees(user){
  //   mentorFactory.filteredmentees(user, function(data){
  //     _this.mentees=data;
  //     console.log(data)
  //
  //   })
  // }
  // filteredmentees();
