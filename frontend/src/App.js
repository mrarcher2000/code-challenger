import React from 'react'
import Nav from './components/Nav'
import Editor from './components/Editor'
import './index.css'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Editor mode={'javascript'}></Editor>
    </div>
  );
}

export default App;