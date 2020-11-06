import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import CameraIcon from '../../images/camera.svg';

import api from "../../services/apiBackend";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";
//import "./styles.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/authenticate", { email, password });
        login(response.data.token);
        this.props.history.push("/api");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={CameraIcon} alt="Camera Icon" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
          <hr />
          <Link to="/cadastro">Criar Login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);






/*
import React from 'react';

import {
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import "./styles.css";

const Login = (props) => {
    return (
        <>
            <div id="wrap-loginbox" >
                <div id="loginbox" >
                    <div id="register" >
                        Autenticação
                    </div >
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail1" placeholder="email@email.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword1" placeholder="password" />
                        </FormGroup>
                    </Form>
                    <div id="btn-login" >
                        <Button color="info" href="/cadastro">login</Button>{''}
                    </div>
                </div >

                <div id="cadastrar-button-box">

                    <div id="cadastrar-button">
                        <a href="">Criar Login</a>
                    </div>
                </div>


            </div >
        </>


    );
}
export default Login;**/