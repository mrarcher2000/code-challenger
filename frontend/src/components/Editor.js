import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";
import AceEditor from "react-ace";
import Terminal from "terminal-in-react";
import IFrame from "./IFrame";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";
import { Ace } from "ace-builds";

function Editor(props) {
  const [iframeCode, setiFrameCode] = useState(``);
  const [editorMode, setEditorMode] = useState("javascript");
  const [userCode, setUserCode] = useState("");
  const testCases = props.testCases

  const runTestCases = (output) => {
    for(let i=0; testCases.length > i; i++) {
        if(output === testCases[i].expectedOutput) console.log("correct")
        else console.log("incorrect")
    }
  }

  const onChange = (newValue) => {
    setUserCode(newValue);
    localStorage.setItem("currentCode", newValue);
    // console.log(userCode);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let runCode = new Function('input', userCode)
    runTestCases(runCode(3))
  };

  const editorStlye = { 
  }

  return (
    <div>
      <div className="codeEditor">
        <div>
          <AceEditor
            height="500px"
            width="700px"
            border-bottom="20px var(--dark-blue)"
            className="code"
            mode="javascript"
            fontSize="14px"
            theme="cobalt"
            onChange={onChange}
            name="javascript_editor"
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
                }}
            
          />

          <button
            onClick={handleClick}
            style={{
              color: "white",
              backgroundColor: "red",
              border: "1px solid white",
              position: "absolute",
            }}
          >
            Run Code
          </button>

          {/* <IFrame style={{ width: '200%', height: '20%', }} className="frame" srcDoc={iframeCode}></IFrame> */}
        </div>
        <div style= {{
            width: "700px",
            height: "500px"
        }}>
          <Terminal
            color="#e2e2e2"
            backgroundColor="#002240"
            barcolor="black"
            style={{
              fontWeight: "bold",
              fontSize: "1em",
              padding: "0px",
              display: "inline",
            }}
            className="terminalConsole"
            id="terminal"
            startState="open"
            hideTopBar="true"
            watchConsoleLogging
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
