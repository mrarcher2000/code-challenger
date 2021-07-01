import React, {useState} from 'react';
import AceEditor from "react-ace";
import IFrame from './IFrame';


import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-cobalt";

function Editor() {

    const [iframeCode, setiFrameCode] = useState('');

    let iframeValue;

    const onChange = (newValue) =>  {

        var  iframeValue = newValue;
        setiFrameCode(newValue);
        console.log(newValue);
    } 


    return (
        // <div>
        //     <iframe width="100%" height="300" src="//jsfiddle.net/codeeditorNAT/gcp8vyks/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
        // </div>
        <div id="codeEditor">
            <AceEditor
            className="code"
            mode="html"
            theme="cobalt"
            onChange={onChange}
            name="javascript_editor"
            editorProps={{ $blockScrolling: true }}
            />


            <IFrame className="frame" srcDoc={iframeCode}></IFrame>
            {/* <iframe width="100%" height="300" src={iframeCode}></iframe> */}
        </div>

        
    )
}


export default Editor;