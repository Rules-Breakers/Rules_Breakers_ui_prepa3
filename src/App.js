import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Login from './component/libs/Login';
import UpdateForm from "./component/updateBook/UpdateForm";

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
