const Post = require('../../models/Post');
const Editor = require('../../models/Editor');

module.exports = {
    Query: {
        async getPosts(){
             try{
                 const posts = await Post.find();
                 return posts;
             } catch(err) {
                 throw new Error(err);
             }
         }
     }
}