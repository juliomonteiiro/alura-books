import './App.css';
import logo from './imagens/logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       <div className='logo'>
          <img src={logo} alt='Logo '>
          <p><strong>Alura</strong>Books</p>
          </img>
       </div>
      </header>
    </div>
  );
}

export default App;
