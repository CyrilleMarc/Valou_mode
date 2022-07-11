import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
        url("https://images.unsplash.com/photo-1593418632237-33d1b2971828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") center;

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
        flex-wrap: wrap;

`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`
const Agreement = styled.div`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color:white;
    font-size: 16px;
    cursor:pointer;
    background-color: #008080;
    ${mobile({width: "100%"})}
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREER UN COMPTE</Title>
            <Form>
                <Input placeholder="Nom"/>
                <Input placeholder="Prénom"/>
                <Input placeholder="Mot de passe"/>
                <Input placeholder="Confirmation mot de passe"/>
                <Input placeholder="Email"/>
                <Agreement>
                    En créant un compte j'autorise Valou à utiliser mes données pour m'envoyer
                    des informations concernant Valou-Mode et uniquement pour ceci.
                </Agreement>
                <Button>Créer mon compte</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register