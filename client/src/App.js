import Home from './components/Home';
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <>
      <Navigation/>
      <div id='main-content'>
        <Home/>
      </div>
    </>
  );
}

export default App;
