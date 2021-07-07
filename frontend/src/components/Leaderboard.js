import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

import { Grid, Table } from 'semantic-ui-react';
import { POST_SCORES } from '../utils/mutations';
import { useMutation } from '@apollo/client';

function Leaderboard() {

    const [mostChallenges, setMostChallenges] = useState({ users: [], challengesComplete: [] });
    const [highestScores, setHighestScores] = useState({ user: [], highScore: [] });
    const [userHighScore, setUserHighScore] = useState({ username: '', challengesCompleted: '', totalScore: '' });
    // const [challengeCompleted, setChallengeCompleted] = useState({false});
    // const [postScores, {error}] = useMutation(POST_SCORES);

    let pullRecentScore = localStorage.getItem("score");
    const newScore = () => {
        var isChallengeComp = localStorage.getItem("isChallengeComplete");

        if (isChallengeComp === 'true') {
            
            setUserHighScore({ username: 'Admin', challengesCompleted: '1', totalScore: pullRecentScore });
            console.log(userHighScore);
            // localStorage.removeItem("isChallengeCompleted");
        }

    }


    const updateMostChallengesLeader = () => {

        fetch('/graphql?query=query+getScores', {
            method: 'GET',
            // body:  `query getScores() {
            //     user,
            //     challengesCompleted,
            //     totalScore
            // }`
        }).then(data => console.log(data));



        setMostChallenges({
            users: ['Jack', 'Jillian', 'Admin', 'Jill'],
            challengesComplete: [1, 1, 1, 1]
        })

        setHighestScores({
            user: ['Admin', 'Jillian', 'Jack', 'Jill'],
            highScore: [pullRecentScore, 3045, 2124, 1900]
        })

        newScore();
        // console.log(mostChallenges.users);
    };

    useEffect(() => {
        updateMostChallengesLeader();
        // window.addEventListener('load', updateMostChallengesLeader());
    }, []);



    return (
        <div>
            <h1 className="daily-challenge-header">Leaderboards</h1>
            {
                localStorage.getItem("isChallengeComplete") == 'true' ?
                    <div>
                        <Grid centered columns={3}>
                            <div>
                                <h1>Congrats! You completed the challenge, {userHighScore.username}!</h1>
                                <h2>Your new highscore is: {userHighScore.totalScore}!</h2>
                                <h3>Challenges completed: {userHighScore.challengesCompleted}</h3>
                            </div>
                        </Grid>
                    </div>
                    : ''}

            <Grid centered columns={3}>
                <Grid.Row>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>Most Completed Challenges</h2>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Username</Table.HeaderCell>
                                    <Table.HeaderCell>Challenges Completed</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{mostChallenges.users[0]}</Table.Cell>
                                    <Table.Cell>{mostChallenges.challengesComplete[0]}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{mostChallenges.users[1]}</Table.Cell>
                                    <Table.Cell>{mostChallenges.challengesComplete[1]}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{mostChallenges.users[2]}</Table.Cell>
                                    <Table.Cell>{mostChallenges.challengesComplete[2]}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{mostChallenges.users[3]}</Table.Cell>
                                    <Table.Cell>{mostChallenges.challengesComplete[3]}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>High Scores</h2>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Username</Table.HeaderCell>
                                    <Table.HeaderCell>High Scores</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{highestScores.user[0]}</Table.Cell>
                                    <Table.Cell>{highestScores.highScore[0]}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{highestScores.user[1]}</Table.Cell>
                                    <Table.Cell>{highestScores.highScore[1]}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{highestScores.user[2]}</Table.Cell>
                                    <Table.Cell>{highestScores.highScore[2]}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{highestScores.user[3]}</Table.Cell>
                                    <Table.Cell>{highestScores.highScore[3]}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Column width={2}></Grid.Column>
            </Grid>
        </div >
    )
}


export default Leaderboard;