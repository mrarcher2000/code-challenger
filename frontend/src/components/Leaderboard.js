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


    const newScore = () => {
        var isChallengeComp = localStorage.getItem("isChallengeComplete");

        if (isChallengeComp === 'true') {
            let pullRecentScore = localStorage.getItem("score");
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
            users: ['Jack', 'Jillian', 'Admin'],
            challengesComplete: [5, 4, 1]
        })

        setHighestScores({
            user: ['Jillian', 'RonDotCom', 'Jill'],
            highScore: [5324, 4949, 3500]
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
            <nav>
                <div>
                    <Link to="/">
                        <h1>Code Challenger</h1>
                    </Link>
                </div>
            </nav>

            {
                localStorage.getItem("isChallengeComplete") == 'true' ?
                    <div>
                        <br /> <br /> <br /> <br />
                        <Grid centered columns={3}>
                            <div>
                                <h1>Congrats! You completed the challenge, {userHighScore.username}!</h1>
                                <h3>Your new hiqhscore is: {userHighScore.totalScore} !!</h3>
                                <h4>Challenges completed: {userHighScore.challengesCompleted}</h4>
                            </div>
                        </Grid>
                    </div>
                    : ''}
            <br /> <br /> <br /> <br />
            <Grid centered columns={3}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <h1>Leaderboards</h1>
                        <br />
                        <br />
                    </Grid.Column>
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
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>Highest Combined Scores</h2>
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