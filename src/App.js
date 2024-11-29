import './App.css';
import LoginNewUser from './MainPage/Login.jsx'
import SendUserIdButton from './MainPage/LandingPage.jsx';
import { useState } from 'react';
import Header from './MainPage/Header.jsx';

function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      <Header user={user}/>
      <div className='main-content'>
        {user?(<SendUserIdButton user={user}/>):(<LoginNewUser onLogin={(newuser)=> setUser(newuser)}/>)}
      </div>
    </div>
  );
}

export default App;
