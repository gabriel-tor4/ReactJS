import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {


  return (
    <div className="App">
     <HelloWord />
     <SayMyName nome="gabriel"/>
     <SayMyName nome="Samuel"/>
     <Pessoa name = "gabriel" idade = "20" profissao = "progamador" foto = "https://via.placeholder.com/150" />
    </div>

  );

}

export default App;
