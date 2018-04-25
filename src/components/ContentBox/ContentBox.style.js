import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const ContentBoxStyled = styled.div`
    position: absolute;
    border-radius: 10px;
    padding-left: 50px;
    padding-right: 50px;
    color: #000;
    border: 5px solid black;
    box-shadow: 2px 2px 20px 5px rgba(0,0,0,0.2);
    top: 7em;
    font-size: 1.4em;
    align-self: center;
    height: 65vh;
    width: 50vw;
    z-index: 888;
    background: white;
    overflow: scroll;
    animation: 2s ${fadeInAnimation};

    p {
        margin-top: 3em;
        padding: 30px;
        text-align: left;

    }
    
`;