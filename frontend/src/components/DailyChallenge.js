import React, { useState } from "react";
import challenges from '../utils/challenges'
import {Button} from 'semantic-ui-react'
import Challenge from './Challenge'

function DailyChallenge() {
  let challenge = challenges[0];
  let cName = challenge.name;
  let cDesc = challenge.desc;
  let cTestCases = challenge.testCases;
  return (
    <div className="daily-challenge">
      <h1 className="daily-challenge-header">Daily Challenge</h1>
    <div className="daily-challenge-body">  
      <h2 className="daily-challenge-subheader">Today's Challenge:</h2>
      <Challenge></Challenge>
    </div>
    </div>
  );
}

export default DailyChallenge;
