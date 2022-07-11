import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
        url("https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80") center;

    display:flex;
    align-items: center;
    justify-content:center;
    background-size: cover;
`

const Title = styled.h1`
        font-size: 40px;
        font-weight: 600;
`
const Wrapper = styled.div`
background-color: white;
    padding: 20px;
    width: 35%;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;

`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0;
        padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color:white;
    font-size: 16px;
    cursor:pointer;
    background-color: #008080;
    margin-bottom: 10px;
    ${mobile({width: "100%"})}
`
const Link = styled.div`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;
`



const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SE CONNECTER</Title>
            <Form>  
                <Input placeholder="Email"/>
                <Input placeholder="Mot de passe"/>
                <Button>Se connecter</Button>
                <Link>MOT DE PASSE OUBLIE</Link>
                <Link>CREER UN NOUVEAU COMPTE</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login