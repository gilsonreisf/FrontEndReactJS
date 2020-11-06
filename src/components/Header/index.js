import React from 'react';
import Profilepic from '../../images/user.svg'



import "./styles.css";


const Header = () => (

    <header id="main-header">
        <h1>Reac</h1>
        <h2>tips</h2>
        <div className="profile-box">
            <a href="/perfil" target="_self" >
                <img src={Profilepic} alt="" />
            </a>
        </div>
    </header >

);

export default Header;