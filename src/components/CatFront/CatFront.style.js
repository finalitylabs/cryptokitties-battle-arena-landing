import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';


const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const bounce = keyframes`
    0% {
        transform: translateY(1px);
    }
    50%{
        transform: translateY(0px);
    }

    100% {
        transform: translateY(1px);
    }
`;

export const CatFrontStyled = styled.div`
    position: absolute;
    height: 400px;
    width: 400px;
    top: 40vh;
    background-image: url(${require('../../Assets/genesis.png')});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 80;
    animation: 1s ${bounce} ease infinite, 2s ${fadeInLeftAnimation};
`;