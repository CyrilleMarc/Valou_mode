import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive';

const Container = styled.div`
    flex: 1;
    display:flex;
    justify-content:space-between;
    height: 100vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;   
    ${mobile({height: "60vh"})} 
`
const Info = styled.div`
font-size: 40px;
position: absolute;
flex-direction: column;
top: 0;
left: 0;
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content: center;
`
const Title = styled.h1`
    color: black;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
       <Image src={item.img}/>
       <Info>
              <Title>{item.title}</Title>
              <Button>JE CRAQUE !</Button>
       </Info>
    </Container>
  )
}

export default CategoryItem