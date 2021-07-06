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
    <div>
      <h1>Daily Challenge</h1>
      <Challenge></Challenge>
    </div>
  );
}

export default DailyChallenge;
