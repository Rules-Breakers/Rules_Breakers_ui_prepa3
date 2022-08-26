import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' 
        element={
          <HomePage/>        
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
