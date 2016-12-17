var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var mentorSchema = new mongoose.Schema({
  // first: {
  //  type: String,
  // },
  // last: {
  //  type: String,
  // },
  // email: {type:String },
  // password: {type:String },
  // zipcode: { type: String },
  // focus: { type: String },
  // industry: { type: String },
  // linkedin: { type: String },
  // background: [{ type: String}],
  // age: { type: String },
  // range: { type: String },
  // photo: { type: Schema.Types.Mixed },
  // timestamps: {
  //   createdAt: 'created_at',
  //   updatedAt: 'updated_at'
  // },
//   _mentee: [{type: Schema.Types.ObjectId, ref: 'Mentee'}],
// });

first: {
 type: String,
 trim: true,
},
last: {
 type: String,
 trim: true,
},
email: {type:String, required: true, trim: true},
password: {
  type:String,
  required: true,
  minlength: 8,
  maxlength: 32,
  validate: {
    validator: function(value) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    },
    message: "Password failed validation, you must have at least 1 number, uppercase and special characte"
  }
},
zipcode: { type: String, required: true, trim: true},
focus: { type: String, required: true, trim: true},
industry: { type: String, required: true, trim: true},
linkedin: { type: String, required: true, trim: true},
background: { type: String, required: true, trim: true},
age: { type: String, required: true, trim: true },
range: { type: String, required: true, trim: true },
photo: { type: Schema.Types.Mixed },

_mentee: [{type: Schema.Types.ObjectId, ref: 'Mentee'}],
});

mongoose.model('Mentor', mentorSchema);
