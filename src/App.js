import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Admin/Admin.jsx';
import './App.css';
import User from './User/User';
import UserLogin from './User/UserLogin';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<User />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/userlogin" element={<UserLogin />}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
