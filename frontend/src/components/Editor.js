import React, { useState } from 'react';
import AceEditor from "react-ace";
import Terminal from "terminal-in-react";
import IFrame from './IFrame';


import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";

function Editor(props) {

    const { mode } = props;

    const [iframeCode, setiFrameCode] = useState(``);
    const [editorMode, setEditorMode] = useState(props);

    let iframeValue;

    const onChange = (newValue) => {
        var iframeValue = newValue;
        setiFrameCode(`<br /> ${newValue}`);

        // console.log(newValue);
        // console.log(mode);
    }


    const handleClick = (e) => {
        e.preventDefault();
        const runCode = new Function(iframeCode)();
    }

    return (
        // <div>
        //     <iframe width="100%" height="300" src="//jsfiddle.net/codeeditorNAT/gcp8vyks/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
        // </div>
        <div style={{style: "flex"}}>
            <div className="codeEditor">
                <div>
                    <AceEditor
                        height="20%"
                        width="200%"
                        className="code"
                        mode={mode}
                        theme="cobalt"
                        onChange={onChange}
                        name="javascript_editor"
                        editorProps={{ $blockScrolling: true }}
                    />

                    <button onClick={handleClick} style={{ color: 'white', backgroundColor: 'blue', border: 'none', position: 'absolute', }}>Run Code</button>

                    <IFrame style={{ width: '200%', height: '20%', }} className="frame" srcDoc={iframeCode}></IFrame>
                    <div>
                        <Terminal
                            color='white'
                            backgroundColor='black'
                            barcolor='black'
                            style={{ fontWeight: "bold", fontSize: '1em', height: '15%', width: '200%', minHeight: '0px' }}
                            className='terminal-base sc-bdVaJa gSZAyM'
                            id="terminal"
                            startState='minimised open'
                            watchConsoleLogging
                        />
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Editor;