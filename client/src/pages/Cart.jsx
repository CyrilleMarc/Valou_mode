import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import {mobile} from '../Responsive';

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    text-align: center;
    font-weight: 300;
    font-size: 45px;
`

const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor:pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    display: flex;
`
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px ;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid #008080;
    border-radius: 20px;
    padding: 20px;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
    ${mobile({height: "50px", width: "50px"})} 
`

const Details = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10px;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    Background-color: ${(props) => props.color}
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 400;
`
const Add = styled.div``

const Remove = styled.div``
const Hr = styled.hr`
    background-color: #008080;
    border: none;
    height: 1px;
    margin-bottom: 10px;
    opacity: 0.5;
`
const SummaryTitle = styled.h1`
    font-size: 50px;
    padding: 10px;
    text-align: center;
    font-weight: 300;
`
const SummaryItem = styled.span`
    display:flex;
    margin: 50px 0px;
    align-items:center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: ${(props)=>props.type === "total" && "600"};
    font-size: ${(props)=>props.type === "total" && "28px"};
`
const SummaryItemText = styled.span`
  
`
const SummaryItemPrice = styled.div`

`
const Button = styled.button`
    font-size: 20px;
    width: 100%;
    padding: 15px;
    background-color: black;
    color: white;
    font-weight: 400;
    cursor: pointer;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Ton panier</Title>
        <Top>
          <TopButton>Continuer le shopping</TopButton>
          <TopTexts>
            <TopText>Mon panier(2)</TopText>
            <TopText>Mes envies(1)</TopText>
          </TopTexts>
          <TopButton type="filled">Valider mon panier</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />
                <Details>
                  <ProductName><b>Produit :</b>Bottines </ProductName>
                  <ProductId><b>Id :</b>56QSF67867586</ProductId>
                  <ProductColor color="#F6DDCC" />
                  <ProductSize><b>Size :</b>39</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />+
                  <ProductAmount>1</ProductAmount>
                  <Remove />-
                </ProductAmountContainer>
                <ProductPrice>€69</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                <Details>
                  <ProductName><b>Produit :</b>Fatch Louboutin</ProductName>
                  <ProductId><b>Id :</b>56789U786</ProductId>
                  <ProductColor color="blue" />
                  <ProductSize><b>Size :</b>39</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />+
                  <ProductAmount>1</ProductAmount>
                  <Remove />-
                </ProductAmountContainer>
                <ProductPrice>€130</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>COMMANDES</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sous-Total:</SummaryItemText>
              <SummaryItemPrice>€199</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frais de port estimés:</SummaryItemText>
              <SummaryItemPrice>€0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>€199</SummaryItemPrice>
            </SummaryItem>
            <Button>Valider</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart