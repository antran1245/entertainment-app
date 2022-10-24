import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/dataContext';
import Main from './components/Main';
import './App.css'
import Account from './components/Account';

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
