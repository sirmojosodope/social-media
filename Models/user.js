const {Schema, model} = require('mongoose');

const userSchema = new Schema(
   {
      username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      },
      email: {
          type: String,
          required: true,
          unique: true,
          match: 
      },    
     thoughts: [
         {
             type: 
         }
     ],
     friends: [
         {
             type:
        }
     ],
   }
)


module.exports = User;