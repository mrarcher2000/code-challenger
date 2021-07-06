import React, { useState } from "react";
import challenges from "../utils/challenges";
import Editor from "./Editor";
import Timer from './Timer'
import { Button } from "semantic-ui-react";

function Challenge() {
  let challenge = challenges[0];
  let cName = challenge.name;
  let cDesc = challenge.desc;
  let cTestCases = challenge.testCases;
  const [showChallenge, setShowChallenge] = useState(false);
  if (showChallenge === false) {
    return (
      <div>
        <h1>{cName}</h1>
        <h2>{cDesc}</h2>
        <Button onClick={() => setShowChallenge(true)}>Show Challenge</Button>
      </div>
      
    );
  }
  if (showChallenge === true) {
      return (
          <div>
              <h1>{cName}</h1>
              <h2>{cDesc}</h2>
              <Editor testCases={cTestCases}/>
              <Timer />
          </div>
      )
  }
}

export default Challenge;
