import Dictionary from './Dictionary';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
        <Dictionary word="Cocktail" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
