
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
import { sliderItems } from '../data';
import {React, useState} from 'react';
import {mobile} from '../Responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    diplay: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div`
    width : 50px;
    height: 50px;
    background-color: #FBC5C5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "15px"}; 
    right: ${props => props.direction === "right" && "15px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw); 
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center; 
`
const ImgContainer = styled.div`
    width: 110vw;
    height: 100%;
    flex:1;
`
const Image = styled.img`
    height: 80%;
    margin-top: 30px;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
    font-weight: bold;
    `

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: .3REM;
`
const Button = styled.button`
    letter-spacing: .1rem;
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
    
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>JE RANGE DANS MON DRESSING (et je ne dis rien à mon chéri !)</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider