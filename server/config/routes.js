var path = require('path');
var mentors = require('../controllers/mentors.js');

// function loginAuthentication(req,res,next){
//   if (req.session.userId){
//     next();
//   }else{
//     res.status(401).send("User not found");
//   }
// }

module.exports = function(app){
  app.post('/mentor', mentors.registerMentor);
  app.post('/mentee', mentors.registerMentee);
  app.get('/mentor/platform/:id', mentors.getAllMentors);
  app.get('/mentee/platform/:id', mentors.getAllMentees);
  app.post('/mentor/login', mentors.loginMentor);
  app.post('/mentee/login', mentors.loginMentee);
  app.get('/mentor/filtermentees', mentors.filtermentees);
  // app.post('/mentor/filtermentors', mentors.filtermentors);
  app.use(userAuth);
  app.post('/logout', mentors.logout);
  app.post('/logout', mentors.logoutTwo);
  // app.post('/mentor2', mentors.registerMentor2);
  // app.get('/platform', mentors.platform);
  // app.post('/mentor', mentors.registerMentor);
  // app.get('/getpoem/:id', mentors.getpoem);
  // app.get('/codepoem/:id', mentors.show);
  // app.post('/login', mentors.login);
  // app.use(loginAuthentication);
  // // app.get('/home', users.home);
  // app.get('/dashboard', users.home);
  // app.post('/addtopic', topics.addtopic);
  // app.get('/topics', topics.index);
  // app.get('/topics/:id/', topics.showtopic);
  //
  // // app.post('/user/:id/comments', comments.create);
  // app.post('/logout', users.logout);
};
  function userAuth(req,res,next){
    if(req.session.user){
      next();
    }else{
      res.sendStatus(401);
    }
  }
