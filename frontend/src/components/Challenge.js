import React, { useState } from "react";
import challenges from "../utils/challenges";
import Editor from "./Editor";
import Timer from './Timer';
import Footer from './Footer'
import { Button } from "semantic-ui-react";

function Challenge() {
  let challenge = challenges[0];
  let cName = challenge.name;
  let cDesc = challenge.desc;
  let cTestCases = challenge.testCases;
  const [showChallenge, setShowChallenge] = useState(false);
  if (showChallenge === false) {
    return (
      <div className="challenge-body">
        <h1>{cName}</h1>
        <h2>{cDesc}</h2>
        <Button className="challenge-button" onClick={() => setShowChallenge(true)}>Show Challenge</Button>
      </div>
      
    );
  }
  if (showChallenge === true) {
      return (
          <div className="challenge-body">
              <h1>{cName}</h1>
              <h2>{cDesc}</h2>
              <h3>Use "input" to reference array</h3>
              <Timer />
              <Editor testCases={cTestCases}/>
              
          </div>
      )
  }
}

export default Challenge;