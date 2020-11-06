import React, { useEffect, useState, Component } from 'react';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import "./styles.css";
import axios from 'axios';
import db from '../../services/db';

import CameraIcon from '../../images/camera.svg';

//import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import apiBackend from "../../services/apiBackend.js";



import { Form, Container } from "./styles";



class Cadastro extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await apiBackend.post("/auth/register", { name, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={CameraIcon} alt="Camera Icon" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
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
          <button type="submit">Criar conta</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}




export default withRouter(Cadastro);
//export default Cadastro;