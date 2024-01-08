
import './App.css';
import {Navigate, Route,BrowserRouter as Router,Routes} from "react-router-dom"
import Login from './components/login';
import Sigin from './components/sigin';
import Header from './components/header';
import User from './components/user';
export const url = process.env.REACT_APP_API_URL
console.log(url)

function App() {
  return (
   <Router>
    <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sigin' element={<Sigin/>}/>
        <Route path='/user' element={JSON.parse(localStorage.getItem("logindone"))==true?<User/>:<Navigate to="/login"/>}/>
      </Routes>
   </Router>
  );
}

export default App;
