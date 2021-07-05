import React, { useState } from "react";
import Timer from "./Timer";
import Editor from './Editor.js';

function DailyChallenge() {
  return (
    <div>
      <h1>Daily Challenge</h1>
      <Timer></Timer>
      <Editor></Editor>
      
    </div>
  );
}

export default DailyChallenge;
