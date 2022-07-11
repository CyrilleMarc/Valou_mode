import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import CheckroomSharpIcon from '@mui/icons-material/CheckroomSharp';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../Responsive';

const Container = styled.div`
    height: 60px;
    padding: 20px;
    ${mobile({height: "80px"})}

`;
const Wrapper = styled.div`
padding: 10px 20px;
align-items: center;
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column", padding: "10px"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
    
`
const Input = styled.input`
    border: none;
    ${mobile({width: "100%"})}

`
const Center = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 50px;
    letter-spacing: .2rem;
    ${mobile({fontSize: "30px", padding: "10px"})}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: "2"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    font-weight: bold;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>FR</Language>
                    <SearchContainer>
                        <Input placeholder="Rechercher..."/>
                        <Search style={{ color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MAGNIFiiiQUE ! by Valou</Logo>
                    <CheckroomSharpIcon/>
                </Center>
                <Right>
                    <MenuItem>CREER UN COMPTE</MenuItem>
                    <MenuItem>SE CONNECTER</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar