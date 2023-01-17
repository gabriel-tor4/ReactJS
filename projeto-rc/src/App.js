import './App.css';
import { useState } from "react"
import SeuNome from './components/State-list/SeuNome';
import Saudacao from './components/State-list/Saudacao.js';
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

  const [nome, setnome] = useState()


  return (<div className="App">

    <h1>State Lift</h1>
    <SeuNome setnome={setnome} />
    {nome}
    <Saudacao nome={nome} />

  </div>);

}

export default App;
