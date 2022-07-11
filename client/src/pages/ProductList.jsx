import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


const Container = styled.div`
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    display:flex;
`
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>ROBES</Title>
        <FilterContainer>
            <Filter><FilterText>Filtre produits : </FilterText>
            <Select>
            <Option disabled selected>
                Couleur
            </Option>
            <Option>Blanc</Option>
            <Option>Noir</Option>
            <Option>Vert</Option>
            <Option>Bleu</Option>
            </Select>
            <Select>
            <Option disabled selected>
                Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Tri produits : </FilterText>
            <Select>
            <Option disabled selected>
                Prix
            </Option>
            <Option>Nouveautés</Option>
            <Option>Destock</Option>
            <Option>Prix (croissant)</Option>
            <Option>Prix (décroissant)</Option>
            </Select></Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>

    </Container>
  )
}

export default ProductList