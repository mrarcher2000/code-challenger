const { UserInputError } = require('apollo-server');

const checkAuth = require('../../utils/check-auth');
const Post = require('../../models/Post');

module.exports = {
    Mutation: {
        createComm: async (_, { postId, body }, context) => {
            const { username } = checkAuth(context);
            if(body.trim() === '') {
                throw new UserInputError('Cannot have an empty comment', {
                    errors: {
                        body: 'Your comment cannot be empty'
                    }
                })
            }

            const post = Post.findById(postId);

            if(post){
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            }  else throw new UserInputError('Cannot find Post');
        }
    }
};
