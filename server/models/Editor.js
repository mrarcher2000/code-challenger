const { model, Schema } = require('mongoose');

const editorSchema = {

    body: String,
    username: String,
    createdAt: String,
};


module.exports = model('Editor', editorSchema);