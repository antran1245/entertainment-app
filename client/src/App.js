import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/dataContext';
import Main from './components/Main';
import Account from './components/Account';
import './App.css'
import './sass/App.scss'

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Container fluid>
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/account' element={<Account/>}/>
          </Routes>
        </Container>
      </Context>
    </BrowserRouter>
  );
}

export default App;
