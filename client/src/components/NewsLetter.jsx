import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import {mobile} from '../Responsive';

const Container = styled.div` 
    height: 60px;
    // background-color: #fcf5f5;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px;
`
const Title = styled.h1` 
    font-size: 70px;
    margin-bottom: 10px;
`
const Description = styled.div` 
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0px;
    padding: 10px;
    ${mobile({textAlign: "center"})}

`
const InputContainer = styled.div` 
    width: 40%;
    height: 40%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    align-items: center;
    padding: 4px;
    ${mobile({width: "80%"})}
`
const Input = styled.input` 
    border: none;
    flex: 8;

`
const Button = styled.button` 
    flex: 1;
    border-color: none;
    background-color: #008080;
    color: white;
    cursor: pointer;
`
const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Valou, préviens-moi dès que tu mets des nouveautés en ligne</Description>
            <InputContainer>
                <Input placeholder="Email..."/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter