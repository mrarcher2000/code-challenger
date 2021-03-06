const { AuthenticationError, UserInputError } = require('apollo-server');

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
        },

        //delete comment

        deleteComm: async (_, { postId, commentId }, context) => {
            const { username } = checkAuth(context);

            const post = await Post.findById(postId);

            if(post){
                const commIndex = post.comments.findIndex(c => c.id === commentId);

                if(post.comments[commIndex].username === username){
                    post.comments.splice(commIndex, 1);
                    await post.save();
                    return post;
                } else {
                    throw new AuthenticationError('You cannot delete another users post')
                }
            } else {
                throw new UserInputError('Cannot find Post')
            }
        },

        createCode: async (_, { postId, body }, context) => {
            const { username } = checkAuth(context);
            if(body.trim() === '') {
                throw new UserInputError('Cannot have an code comment', {
                    errors: {
                        body: 'Your code cannot be empty'
                    }
                })
            }

            const code = Post.findById(postId);

            if(code){
                code.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            }  else throw new UserInputError('Cannot find Post');
        },


    }
};
