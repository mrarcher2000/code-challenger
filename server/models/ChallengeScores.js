const { model, Schema } = require('mongoose');

const scoresSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    challengesCompleted: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
    totalScore: Number
})

module.exports = model('Scores', scoresSchema);