import React from "react";
import "./styles/global";

import {Form, FormGroup, Label, Input } from 'reactstrap';



//import { FacebookLoginButton } from "react-social-login-buttons";

import "./styles.css";

import Header from "./components/Header";
import Main from './pages/main';
import Footer from "./components/Footer";
import Login from "./pages/HomePage";

import Routes from './routes';





function App() {
  return (

    <div className="App">
      <Header />
      <div className="content-wrap">
        <Routes />
      </div>

      <Footer />
    </div >


  );
};

export default App;
