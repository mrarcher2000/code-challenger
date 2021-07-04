const { AuthenticationError, UserInputError } = require('apollo-server');



const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

module.exports = {
    Query: {
        async getPosts(){
             try{
                 const posts = await Post.find().sort({ createdAt: -1 }); //sorts posts by descending order
                 return posts;
             } catch(err) {
                 throw new Error(err);
             }
         },

         //adding resolver for getPost, single by ID
         async getPost(_, { postId }){
             try{
                 const post = await Post.findById(postId);
                 if(post){
                     return post;
                 } else{
                     throw new Error('Cannot find post')
                 }
             } catch(err){
                 throw new Error(err);
             }
         }
     },

     Mutation: {
         async createPost(_, { body }, context){
            const user = checkAuth(context);
            //console.log(user);

            //making sure no empty post posted

            if (args.body.trim() === ''){
                throw new Error('Your post cannot be empty')
            }

            const newPost = new Post({
               body,
               user: user.id,
               username: user.username,
               createdAt: new Date().toISOString()
            }
            );

            const post = await newPost.save();

            return post;
         },

         //delete post function
         async deletePost(_, { postId }, context){
             const user = checkAuth(context);

             //checks to make sure user deletes own post
             try{
                 const post = await Post.findById(postId);
                 if(user.username === post.username){
                     await post.delete();
                     return 'you successfully deleted post'
                 } else{
                     throw new AuthenticationError('you cannot delete another users post');
                 }
             } catch(err){
                 throw new Error(err);
             }
         },

         //like section

         async likePost(_, { postId }, context){
             const { username } = checkAuth(context);

             const post = await Post.findById(postId);
             if(post){
                 if(post.likes.find(like => like.username === username)){
                     //checks if post is already 'liked'
                     post.likes = post.likes.filter(like => like.username !== user);
                     
                 } else {
                     //if post not liked already, now you can like
                     post.likes.push({
                         username,
                         createdAt: new Date().toISOString()
            
                     })
                    

                 }

                 await post.save();
                 return post;
             } else throw new UserInputError('post not found.');

         }

     }
};