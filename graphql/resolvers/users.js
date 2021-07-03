const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError }= require('apollo-server');

const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      content,
      info
    ) {
      // TODO validate data of user
      // TODO ensure user doens't already exist
      const user = await User.findOne({ username });
      if(user){
          throw new UserInputError('That username is taken', {
              errors: {
                  username: 'This username is already taken'
              }
          })
      }

      // TODO hash passw and creat auth token
      password = await bycrypt.hash(password, 11);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      //spread function return
      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};
