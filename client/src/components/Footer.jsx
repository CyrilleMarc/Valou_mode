import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CheckroomSharpIcon from '@mui/icons-material/CheckroomSharp';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Container = styled.div`
    Display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo =styled.h1`

`
const Desc =styled.p`
    margin: 20px 0px;
`
const SocialContainer =styled.div`
    display: flex;
`
const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #${props=>props.color}
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
   margin-bottom: 30px;
`
const List = styled.ul`
    margin: O;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
   padding: 20px;
`
const TitleLien = styled.h3`
    margin-bottom: 30px;
`
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Valou <CheckroomSharpIcon/> Mode</Logo>
                <Desc>
                    The place to be pour découvrir les dernières tendances
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5998">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Liens utiles</Title>
                <List>
                    <ListItem>Accueil</ListItem>
                    <ListItem>Panier</ListItem>
                    <ListItem>Mode Femme</ListItem>
                    <ListItem>Mon compte</ListItem>
                    <ListItem>Liste des envies</ListItem>
                    <ListItem>Termes et réglement</ListItem>
                </List>
            </Center>
            <Right>
                <TitleLien>Contacts</TitleLien>
                <ContactItem>
                    <MyLocationIcon style={{marginRight: "10px"}}/> Nancy, FR
                </ContactItem>
                <ContactItem>
                    <PhoneAndroidIcon style={{marginRight: "10px"}} /> 06.06.06.06.06
                </ContactItem>
                <ContactItem>
                    <AlternateEmailIcon style={{marginRight: "10px"}}/> accueil@valou_mode.com
                </ContactItem>
                <ContactItem>
                <CreditCardIcon style={{marginRight: "10px"}}/> Paiement CB
                </ContactItem>
            </Right>

        </Container>
    )
}

export default Footer