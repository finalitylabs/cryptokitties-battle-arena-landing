import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';


const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const LogoStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 999;
    top: 8vh;   
    height: 128;
    width: 100%;
    }

    img {
    align-self: center;
    height: 128px;
    width: 128px;
    animation: 700ms ${fadeInDownAnimation};
`;