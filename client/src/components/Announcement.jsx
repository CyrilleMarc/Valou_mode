import React from 'react';
import styled from 'styled-components';
import {mobile} from '../Responsive';

const Container = styled.div`
    height: 40px;
    background-color: #008080;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .1rem;
    ${mobile({padding: "20px", backgroundColor: "transparent", color: "#008080"})}
`;
const Announcement = () => {
  return (
    <Container>Super Deal! Frais De Port Gratuit à Partir De €50</Container>
  )
}

export default Announcement