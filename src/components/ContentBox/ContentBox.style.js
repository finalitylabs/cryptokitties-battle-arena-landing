import styled, { keyframes } from 'styled-components';
import media from '../../themes/media';


export const ContentBoxStyled = styled.div`
    position: absolute;
    border-radius: 10px;
    padding-left: 40px;
    padding-right: 40px;
    color: #000;
    border: 5px solid black;
    box-shadow: 2px 2px 20px 5px rgba(0,0,0,0.2);
    top: 8em;
    font-size: 1.4em;
    align-self: center;
    height: 65vh;
    width: 45vw;
    z-index: 888;
    background: white;
    overflow: scroll;
    

    p {
        margin-top: 1.5em;
        padding: 20px;
        text-align: left; 
    }

    ${media.tablet`
        width: 60vw;
        height: 60vh;
    `
    }

    ${media.phone`
        font-size: 1em;
        width: 80%;
        height: 60%;
        padding: 0px;
        padding-top: 3em;
        margin: 0px;
    `}
    
`;