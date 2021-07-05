import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import AceEditor from "react-ace";
import Terminal from "terminal-in-react";
import IFrame from './IFrame';


import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";

function Editor() {

    const [iframeCode, setiFrameCode] = useState(``);
    const [editorMode, setEditorMode] = useState('javascript');
    const [userCode, setUserCode] = useState('');

    const pullCodeAPI = function () {
        fetch('https://www.codewars.com/api/v1/code-challenges/5a331ea7ee1aae8f24000175')
            .then(res => res.json())
            .then(data => setiFrameCode(`${data.description}`));
    }


    useEffect(() => {
        window.addEventListener('load', pullCodeAPI());
        // if (error) {(error) => console.log(error)};
    });

    const onChange = (newValue) => {
        setUserCode(newValue);
        localStorage.setItem('currentCode', userCode);
        // console.log(userCode);
    }


    const handleClick = (e) => {
        e.preventDefault();
        const runCode = new Function(userCode)();
    }

    return (
        <div style={{ style: "flex" }}>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <ReactMarkdown children={iframeCode}></ReactMarkdown>
                    </Grid.Column>
                    <Grid.Column >
                        <div className="codeEditor">
                            <div>
                                <AceEditor
                                    height="500px"
                                    width="700px"
                                    className="code"
                                    mode="javascript"
                                    fontSize="14px"
                                    theme="cobalt"
                                    onChange={onChange}
                                    name="javascript_editor"
                                    editorProps={{ $blockScrolling: true }}
                                />

                                <button onClick={handleClick} style={{ color: 'white', backgroundColor: 'red', border: '1px solid white', position: 'absolute', }}>Run Code</button>

                                {/* <IFrame style={{ width: '200%', height: '20%', }} className="frame" srcDoc={iframeCode}></IFrame> */}
                            </div>
                        </div>
                        <Terminal
                            color='white'
                            backgroundColor='black'
                            barcolor='black'
                            style={{ fontWeight: "bold", fontSize: '1em', height: '200px', width: '700px', minHeight: '0px', padding: '0px', display: 'inline', position: '' }}
                            // className='terminal-base sc-bdVaJa gSZAyM'
                            id="terminal"
                            startState='minimised'
                            watchConsoleLogging
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    

                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated="right" width="3">
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>


    )
}


export default Editor;