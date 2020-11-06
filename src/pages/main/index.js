import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import axios from 'axios';

import './styles.css';

function RenderApi() {

    const [conselho, setConselho] = useState("");

    useEffect(() => {
        api.get('advice').then(response => {
            setConselho(response.data.slip);
        });
    }, [conselho]);


    return (
        <>
            {/* 
            <div id="advicebox">
                <h1>Conselho do Dia:</h1>
                <h2 id="advice-text">{this.state.advice}</h2>
                <button id="adv-button" onClick={this.state.advice}>
                    <span>
                        Me de conselho
                        </span>
                </button>
            </div> */}

            <div id="advicebox">
                <h1>Conselhos para a vida:</h1>
                    <h2>"{conselho.advice}"</h2>
            </div>



        </>

    );


}

export default RenderApi;