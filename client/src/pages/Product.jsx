import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive';

const Container = styled.div`
${mobile({height: "30vh%"})}
`
const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    ${mobile({padding: "30px"})}
   
`
const ImgContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;


`
const Title = styled.h1`
    font-size: 60px;
    font-weight: 200;
`
const Image = styled.img`
    width: 100%;
    height : 135vh;
    object-fit: cover
   
`
const Desc = styled.div`
    font-size: 30px;
    font-weight: 100;
    letter-spacing: .0.5rem;
    margin: 20px 0px;
`
const Prix = styled.div`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
    display:flex;
    justify-content: space-between;
    margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FilterTilte = styled.div`
    font-size: 20px;
    font-weight: 400;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    border-radius: 50%;
    cursor: pointer;
   
`
const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`
const FilterSizeOption = styled.option`
   
`
const AddContainer = styled.div`
   display:flex;
   align-items: center;
   width: 50%;
   justify-content: space-between;
   ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center,
    font-weight: 700;
`
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid #008080;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 10px;
   font-weight: 500;
`
const Button= styled.button`
   padding: 15px;
   border: 1px solid #008080;
   cursor: pointer;
   border-radius: 10px;
   font-size: 15px;
   font-weight: 400;
   letter-spacing: .1rem;

   &:hover{
    background-color: #008080;
    color: white;
   }

`
const Add= styled.button`
    padding: 10px;
    border: 1px solid #008080;
    cursor: pointer;
    border-radius: 10px;

    &:hover{
        background-color: #008080;
        color: white;
       }
`
const Remove= styled.button`
    padding: 10px;
    border: 1px solid #008080;
    cursor: pointer;
    border-radius: 10px;

    &:hover{
        background-color: #008080;
        color: white;
       }
`
const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.unsplash.com/photo-1612878569417-a62601be8d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Robe courte en Soie</Title>
                    <Desc>
                        Robe courte de soirée en soie. Confort et élégance assurés.
                    </Desc>
                    <Prix> €30</Prix>
                    <FilterContainer>
                        <Filter>
                            <FilterTilte>Couleur:</FilterTilte>
                            <FilterColor color="black"/>
                            <FilterColor color="purple"/>
                            <FilterColor color="blue"/>
                            <FilterColor color="green"/>
                            <FilterColor color="#F4D03F"/>
                        </Filter>
                        <Filter>
                            <FilterTilte>Taille:</FilterTilte>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove>-</Remove>
                                <Amount>1</Amount>
                                <Add>+</Add>
                            </AmountContainer>
                            <Button>Ajouter au panier</Button>
                        </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product