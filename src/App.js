
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBhhgaPZIt1xNdNG39zsgW_ZVcNmqX8Wsg",
  authDomain: "auth-development-8aa0c.firebaseapp.com",
  projectId: "auth-development-8aa0c",
  storageBucket: "auth-development-8aa0c.appspot.com",
  messagingSenderId: "969884448302",
  appId: "1:969884448302:web:5d286d0d252825dbb311bf"
};

 initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth, user =>{
      setUser(user)
    })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
