const { AuthenticationError, UserInputError } = require('apollo-server');
const Scores = require('../../models');

module.exports = {
    Query: {
        async getScores() {
            try {
                const scores = await Scores.find();
                return scores;
            } catch(err) {
                throw new Error(err);
            }
        }
    },

    Mutations: {
        async postScores(_, {body}, context) {
            const {user} = checkAuth(context);
            
            const newHighScore = new Scores({
                username: user.username,
                challengesCompleted: body.challengesCompleted,
                totalScore: body.totalScore
            })

            const userScore = newHighScore.save(); 

            return userScore;
        } 
    }
}