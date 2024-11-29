// import { useState } from 'react';
import {auth} from '../firebaseConfig'
import { signOut } from 'firebase/auth';

function Header({user}){

    const handleSignOut = async () => {
        try {
          await signOut(auth);
        //   setUser(null);
          console.log("User signed out");
        } catch (error) {
          console.error("Error signing out:", error.message);
        }
      };

    return (
        <>
            <header className="App-header">
                <div style={{marginRight:"900px"}}><img></img></div>
                <div className='header-list'>
                    <nav>
                        <ul className="header-nav-list">
                        <li>{!user?<button className="header-signin-out" style={{margin:"0px"}}>
                                        Sign In</button>:<button className="header-signin-out" onClick={handleSignOut} style={{margin:"0px"}}>
                                        Log Out</button>}</li>
                        <li><a href="#home" className="header-opts" style={{textDecoration:"none"   }}>Home</a></li>
                        <li><a href="#aboutus" className="header-opts" style={{textDecoration:"none"}}>About Us</a></li>
                        <li><a href="#contact" className="header-opts" style={{textDecoration:"none"}}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header