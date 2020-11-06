import React from 'react';

import "./styles.css";


const Footer = () => (

    <div className="footer">

        <footer id="main-footer">
            <hr />
            <div className="row">
                <p className="bartext">
                    &copy; {new Date().getFullYear()} Trainee ELO | All rights reserved | Terms Of Service | Privacy | Developed in React
            </p>
            </div></footer>

    </div>
);

export default Footer;