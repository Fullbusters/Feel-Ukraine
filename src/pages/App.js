import React from 'react';
import './App.css';
import Main from "./Main";
import Header from "../components/Header";

function App() {

  //TODO router
  return (
    <div className='container'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
