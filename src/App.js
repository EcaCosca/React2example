import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Timer from './components/Timer';

function App() {


  return (
    <div className="App">
    
      <Greet name="Mushira" class="javascript" />
      <Greet name="Marah" />
      <Greet name="Maha" />

      <Welcome name="Turki" />

      <Timer />
      
      
      
    </div>
  );
}

export default App;
