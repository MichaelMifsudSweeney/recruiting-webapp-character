import './App.css';
import CharacterSheet from './components/CharacterSheet/CharacterSheet.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Waterdeep!</h1>
      </header>
      <section className="App-section">
        <CharacterSheet />
      </section>
    </div>
  );
}

export default App;
