import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
function App() {


  return (
    <div className="App">
      <Frase></Frase>
     <HelloWord />
     <SayMyName nome="gabriel"/>
     <SayMyName nome="Samuel"/>
     <Pessoa name = "gabriel" idade = "20" profissao = "progamador" foto = "https://via.placeholder.com/150" />
     <List/>
    </div>

  );

}

export default App;
