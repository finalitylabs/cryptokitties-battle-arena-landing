import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const ContentStyled = styled.div`
    position: absolute;
    border-radius: 1;
    padding-left: 5;
    padding-right: 5;
    color: #000;
    text-align: left;
    top: 8em;
    font-size: 1.4em;
    align-self: center;
    height: 60vh;
    width: 50vw;
    z-index: 888;
    overflow: scroll;
    animation: 2s ${fadeInAnimation};

    h1 {
        text-align: center;
    }
    
`;