import './App.css';
//import Condicional from './components/Condicional/Condicional';
import OutraLista from './components/Forms-list/OutraLista';
//import HelloWord from './components/Testes/HelloWord';
//import SayMyName from './components/Testes/SayMyName';
//import Pessoa from './components/Testes/Pessoa';
//import Frase from './components/Testes/Frase';
//import List from './components/Forms-list/List';
//import Evento from './components/Eventos/Evento'
//import Form from './components/Forms-list/Form';
function App() {

  const Meusitens = ["React", "angualar", "Vue",]


  return (
    <div className="App">
      <h1>
        Renderização de listas
      </h1>

      <p/>
      <OutraLista itens={Meusitens}></OutraLista>
      <OutraLista itens={ []}/>
    </div>

  );

}

export default App;
