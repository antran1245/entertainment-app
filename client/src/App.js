import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataContext from './context/dataContext';
import Main from './components/Main';
import Account from './components/Account';
import './App.css'
import './sass/App.scss'
import UserContext from './context/userContext';

function App() {

  return (
    <BrowserRouter>
      <UserContext>
        <DataContext>
          <Container fluid>
            <Routes>
              <Route path='*' element={<Main />} />
              <Route path='/account' element={<Account/>}/>
            </Routes>
          </Container>
        </DataContext>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
