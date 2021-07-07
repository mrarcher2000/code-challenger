import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./Footer";

function Feed() {
  let userName = "Admin";
  let userScore = localStorage.getItem("score");
  let currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <h1 className="daily-challenge-header">Global Activity</h1>
      <div className="feed-group">
        <Card className="feed-card">
          <Card.Content>
            <Card.Header>{userName}</Card.Header>
            <Card.Meta>07/07/2021 at {currentTime}</Card.Meta>
            <Card.Description>
              {userName} just finished the daily challenge with a score of{" "}
              {userScore}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <code>
              let lowestNumber &#61; 9999&#59;
              <br /> let highestNumber &#61; -9999&#59;
              <br /> for&#40;let i = 0&#59; input.length &#62; i&#59; i++&#41;
              &#123; <br />
              if&#40;lowestNumber &#62; input&#91;i&#93;&#41; lowestNumber =
              input&#91;i&#93;;
              <br /> if&#40;highestNumber &#60; input&#91;i&#93;&#41;
              highestNumber = input&#91;i&#93;;
              <br /> &#125; <br />
              return lowestNumber + highestNumber&#59;
            </code>
          </Card.Content>
        </Card>
        <Card className="feed-card">
          <Card.Content>
            <Card.Header>Jack</Card.Header>
            <Card.Meta>07/07/2021 at 2:00 PM</Card.Meta>
            <Card.Description>
              Jack just finished the daily challenge with a score of{" "}
              2124
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <code>
              let lowestNumber &#61; 9999&#59;
              <br /> let highestNumber &#61; -9999&#59;
              <br /> for&#40;let i = 0&#59; input.length &#62; i&#59; i++&#41;
              &#123; <br />
              if&#40;lowestNumber &#62; input&#91;i&#93;&#41; lowestNumber =
              input&#91;i&#93;;
              <br /> if&#40;highestNumber &#60; input&#91;i&#93;&#41;
              highestNumber = input&#91;i&#93;;
              <br /> &#125; <br />
              return lowestNumber + highestNumber&#59;
            </code>
          </Card.Content>
        </Card>
        <Card className="feed-card">
          <Card.Content>
            <Card.Header>Jill</Card.Header>
            <Card.Meta>07/07/2021 at 1:30 PM</Card.Meta>
            <Card.Description>
              Jill just finished the daily challenge with a score of{" "}
              1900
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <code>
              let lowestNumber &#61; 9999&#59;
              <br /> let highestNumber &#61; -9999&#59;
              <br /> for&#40;let i = 0&#59; input.length &#62; i&#59; i++&#41;
              &#123; <br />
              if&#40;lowestNumber &#62; input&#91;i&#93;&#41; lowestNumber =
              input&#91;i&#93;;
              <br /> if&#40;highestNumber &#60; input&#91;i&#93;&#41;
              highestNumber = input&#91;i&#93;;
              <br /> &#125; <br />
              return lowestNumber + highestNumber&#59;
            </code>
          </Card.Content>
        </Card>
        <Card className="feed-card">
          <Card.Content>
            <Card.Header>Jillian</Card.Header>
            <Card.Meta>07/07/2021 at 1:00 PM</Card.Meta>
            <Card.Description>
              Jillian just finished the daily challenge with a score of{" "}
              3045
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <code>
              let lowestNumber &#61; 9999&#59;
              <br /> let highestNumber &#61; -9999&#59;
              <br /> for&#40;let i = 0&#59; input.length &#62; i&#59; i++&#41;
              &#123; <br />
              if&#40;lowestNumber &#62; input&#91;i&#93;&#41; lowestNumber =
              input&#91;i&#93;;
              <br /> if&#40;highestNumber &#60; input&#91;i&#93;&#41;
              highestNumber = input&#91;i&#93;;
              <br /> &#125; <br />
              return lowestNumber + highestNumber&#59;
            </code>
          </Card.Content>
        </Card>
      </div>
    </div>
    
  );
}

export default Feed;
