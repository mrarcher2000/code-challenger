const { model, Schema } = require('mongoose');

const postSchema = new Schema({

    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
                body: String,
                username: String,
                createdAt: String,
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String,
        }
    ],

    code: [
        {
            body: String,
            username: String,
            createdAt: String,
        }
    ],

    
    users: {
        type: Schema.Types.ObjectId,
        ref: 'users'

    }
});

module.exports = model('Post', postSchema);
