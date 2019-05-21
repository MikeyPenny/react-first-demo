import React from 'react';
// const React = require("react")
import logo from './logo.svg';
import './App.css';
import Navbar from "../components/Nav"
import Footer from "../components/Footer"
import Article from "../components/Article"
import HeroContainer from "../layout/HeroContainer"
import Card from "../components/Card"

import students from "../students.json"

function App() {

  let studentJSX = students.map((student)=> 
      <Card firstname={student.firstname} 
            lastname={student.lastname} 
            email={student.email}
      />)
  let loggedId = true
  return (

    <HeroContainer>
        {loggedId ? <h1>Welcome</h1>: <h1>Beat it</h1>}
        <Card firstname="Jurgen" lastname="Tonneyck" email="j.tonneyck@gmail.com"/>
        <Card firstname="Gijs" lastname="Lebesque" email="GijsLovesYou<3@hotmail.com"/>
        <Card firstname="Kido" lastname="Jung" email="KidoJung@Freud.com"/>
        {studentJSX}
    </HeroContainer>

  );
}

export default App;
