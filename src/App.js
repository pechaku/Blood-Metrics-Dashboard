import './App.css';
import Analyze from './components/Ollama';
import PatientData from './components/PatientData';

function App() {
  return (
    <div className="App">
        <PatientData />
        <Analyze />
    </div>
  );
}

export default App;
