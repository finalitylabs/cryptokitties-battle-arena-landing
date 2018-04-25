import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';


const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const LogoStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 999;
    top: -4vh;   
    width: 100%;
    }

    img {
    align-self: center;
    width: 350px;
    animation: 700ms ${fadeInDownAnimation};
`;