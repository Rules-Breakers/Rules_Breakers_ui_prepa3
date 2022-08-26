import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './App.css';
import Login from './component/libs/Login';
import HomePage from './pages/HomePage';
import Historique from './component/History/Historique';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' 
        element={
          <Login />       
        }
      />
      <Route path='/home'
      element={<HomePage />}
      />
       <Route path='/history' 
        element={
          <Historique/>        
        }
      />
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
