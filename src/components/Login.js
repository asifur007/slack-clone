import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => 
    alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />
        <h1>Sign in to Asif's Slack</h1>
        <p>asif.slackclone.com</p>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f8f8f8;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px white;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 20px;
    text-transform: inherit;
    background-color: green;
    color: white;
  }
`;
