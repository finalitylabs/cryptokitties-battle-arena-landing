import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const fadeInRightAnimation = keyframes`${fadeInRight}`;

const bounce = keyframes`
    0% {
        transform: translateY(0px);
    }
    50%{
        transform: translateY(2px);
    }

    100% {
        transform: translateY(-2px);
    }
`;

export const CatBackStyled = styled.div`
    position: absolute;
    height: 1000px;
    width: 1000px;
    left: 55vw;
    top: 30vh;
    background-image: url(${require('../../Assets/knight_cat.png')});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1050;
    animation: 1s ${bounce} ease infinite, 1600ms ${fadeInRightAnimation};


`;

