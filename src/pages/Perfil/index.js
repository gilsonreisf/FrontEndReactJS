import React, { useEffect, useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./styles.css";

import axios from 'axios';

import CameraIcon from '../../images/camera.svg';
import Locker from '../../images/padlock.svg';
import BgImage from '../../images/undraw_Group_chat_re_frmo.svg';




function Profile() {

    




    // const [email, setEmail] = useState("");

    // useEffect(() => {
    //     axios.post('http://localhost:27017').then(response => { //utilizar axios
    //         setEmail(response.email);
    //     });
    // }, []);







    return (
        <>
            <div id="all">
                <div id="left">
                    <img src={BgImage} alt="" />
                </div>

                <div id="right">
                    <div id="wrap-profilebox" >

                        <div id="profilebox" >
                            <div id="profile" >
                                Cadastre-se
                </div >

                            <div className="image-upload">

                                <label  htmlFor="file-input">
                                    <div id="img-cam">
                                        <img src={CameraIcon} alt="input file"/>
                                    </div>
                                </label>

                                <input id="file-input" type="file" />

                            </div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleName">Nome</Label>
                                    <div className="input1">
                                        <Input type="text" name="name" id="exampleName2" placeholder="NomeUser" disabled="disabled" />
                                        <img className="icon-locker" src={Locker} alt="" />
                                    </div>
                                    <Label  for="exampleEmail">Email</Label>
                                    <div className="input1">
                                        <Input type="email" name="email" id="exampleEmail2" placeholder="email@cadastrado.com" disabled="disabled" />
                                        <img className="icon-locker" src={Locker} alt="" />
                                    </div>
                                </FormGroup>
                            </Form>

                            <div id="btn-save" >
                                <Button color="info">Salvar</Button>{' '}
                            </div>
                        </div >
                    </div >
                </div>
            </div>
        </>

    );
}

export default Profile;