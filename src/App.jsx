import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Updated imports
import Header from './header';
import "./App.css"
import "./first.css"
import Resume from './resume';
import First from './first';
import Button from './discover';
import Skills from './skills';
import Projects from './projects'


export default function App() {
  return (<>
      <Header />
      <First/>
      <Button/>
      <Skills/>
      <Resume/>
      <div className="lesprojets">
      <Projects/>  </div>    <br />
      
      
      </>
  );
}