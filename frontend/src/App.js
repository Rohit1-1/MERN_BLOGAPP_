import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import SigninCard from './page/Login';
import Profile from './page/Profile';
import SignupCard from './page/Signup';
import SingleCard from './page/SinglePage';
import PrivateRoute from './Route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<SingleCard/>}/>
        <Route path='/login' element={<SigninCard/>}/>
        <Route path='/signup' element={<SignupCard/>}/>
        <Route path='/myprofile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
