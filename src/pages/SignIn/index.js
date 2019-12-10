import React, { useState } from "react";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { toast } from "react-toastify";

import { Container, Form, Password } from "./styles";

export default function SignIn({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibledPass, setVisibledPass] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "Matheus" && password === "123") {
      toast.success(`Bem vindo ${username}, você será redirecionado :)`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true
      });

      const dataToken = { username, password };

      localStorage.setItem("@token", JSON.stringify(dataToken));

      setTimeout(() => {
        
        history.push("/dashboard");
      }, 1500);
    } else {
      toast.error(`Dados incorretos, tente novamente :(`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true
      });
    }
  }

  function handleShowPassword(){
    if(visibledPass === false){
      document.getElementById("inputPassword").type = 'text';
      setVisibledPass(true);
    }else{
      document.getElementById("inputPassword").type = 'password';
      setVisibledPass(false);
    }
    
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="inputUser">USERNAME</label>
          <input
            type="text"
            placeholder="Digite seu nome aqui!"
            id="inputUser"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="inputPassword">PASSWORD</label>
          <Password>
            <input
              type="password"
              id="inputPassword"
              placeholder="Digite sua senha aqui!"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            { visibledPass ? <MdVisibilityOff size="22" onClick={() => handleShowPassword()} /> : <MdVisibility size="22" onClick={() => handleShowPassword()}/>}
          </Password>

          <div>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              Esqueceu sua senha?
            </a>
          </div>

          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </>
  );
}
