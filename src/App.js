import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './App.css';
import Login from './component/libs/Login';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' 
        element={
          <Login/>
        }
      />
      <Route path='/home'
      />
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
