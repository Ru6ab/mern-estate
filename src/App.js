import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes,Route } from 'react-router-dom'
import Profile from './Pages/Profile';
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp';
import About from './Pages/About'
import Header from './components/Header';
function App() {
  return ( 
  <BrowserRouter> 
  <Header/>
  <Routes>    
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
</BrowserRouter>
  );
  
}


export default App;
