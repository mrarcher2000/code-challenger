import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import Footer from './Footer'


function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Code Challenger!</h1>
        <h2>
          The best place to practice coding problems against your friends.
        </h2>
      </div>
      <div className="home-body">
        <h1>How would you like to compete today?</h1>
        <div className="home-cards">
          <Card>
            <Card.Content>
              <Card.Header>Daily Challenge</Card.Header>
              <Card.Description>
                Challenge changes every day at midnight, complete the challenge
                using as few lines of code and as quick as you can to earn a
                spot on today's leaderboard. You can also share your solution
                with your friends to give them a chance to compete against you!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='/daily-challenge'><Button>Try it out!</Button></a>
              <a href='/leaderboard'><Button>Leaderboard</Button></a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>View Friends' Activity</Card.Header>
              <Card.Description>
                View all of your friends' recent solutions to various
                challenges. Challenge your friends solutions to earn points and
                bragging rights!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>Check it out!</Button>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>View Leaderboards</Card.Header>
              <Card.Description>
                Take a look at all of the various leaderboards. You can see
                where you place among your friends and the world. Checkout
                leaderboards for specific challenges, or view the Code
                Challenger Hall of Fame!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>View Leaderboards</Button>
            </Card.Content>
          </Card>
        </div>
        <div>
          <h1>
            Maybe add global feed down here or leave it empty and add images to
            cards to fill a little bit of the blank space let me know what do
            you guys think?
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
