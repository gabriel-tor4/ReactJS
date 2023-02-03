
import './App.css';
import {BrowserRouter as Router, Routes, Route,  }from "react-router-dom"
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Empresa from './Pages/Empresa';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
//import { useState } from "react"
//import SeuNome from './components/State-list/SeuNome';
//import Saudacao from './components/State-list/Saudacao.js';
//import Condicional from './components/Condicional/Condicional';
//import OutraLista from './components/Forms-list/OutraLista';
//import HelloWord from './components/Testes/HelloWord';
//import SayMyName from './components/Testes/SayMyName';
//import Pessoa from './components/Testes/Pessoa';
//import Frase from './components/Testes/Frase';
//import List from './components/Forms-list/List';
//import Evento from './components/Eventos/Evento'
//import Form from './components/Forms-list/Form';
function App() {
  return (<>
  
  <Router>
    <Navbar></Navbar>
    <Routes>
      <Route exact path='/' element = {<Home/>}></Route>
      <Route exact path='/Empresa' element = {<Empresa/>}></Route>
      <Route exact path='/Contato' element = {<Contato/>}></Route>
    </Routes>
  </Router>
  <Footer/>

  </>);

}

export default App;
