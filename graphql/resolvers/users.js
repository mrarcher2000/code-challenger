const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError }= require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../utils/validators');
const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

//token function
function createToken(user){ 
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

}

module.exports = {
  Mutation: {
    async login(_,{ username, password } ){
      const {errors, valid} = validateLoginInput(username, password);

      // adding error for validation
      if(!valid){
        throw new UserInputError('Errors on validation login', { errors });
      }

      const user = await User.findOne({ username });

      if(!user){
        errors.general = 'Cannot find the User';
        throw new UserInputError('Cannot find the User', { errors });

      } 

      const passMatch = await bcrypt.compare(password, user.password);
      if(!passMatch){
        errors.general = 'Cannot find User credentials';
        throw new UserInputError('Cannot find User credentials', { errors });
      }

      const token = createToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      content,
      info
    ) {
      // Done validate data of user

      const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)
      if(!valid){
        throw new UserInputError('Errors', {errors});
      }
      // Done ensure user doesn't already exist
      const user = await User.findOne({ username });
      if(user){
          throw new UserInputError('That username is taken', {
              errors: {
                  username: 'This username is already taken'
              }
          })
      }

      // Done hash password and creat auth token
      password = await bcrypt.hash(password, 11);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = createToken(res);
      return {
        ...res._doc,
        id: res._id,
        token
      };

      //spread function return
      /* return {
        ...res._doc,
        id: res._id,
        token
      }; */

     
    }
    
  }
};
