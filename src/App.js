import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import UpdateForm from "./component/updateBook/UpdateForm";
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
             element={
        <UpdateForm/>
      }
      />
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
