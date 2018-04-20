import styled, { keyframes } from 'styled-components';

const planetMove = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
`;


export const PlanetStyled = styled.div`
    position: fixed;
    left: 70vw;
    top: 40vh;
    height: 60vh;
    width: 60vw;
    background-image: url(${require('../../Assets/pluto.png')});
    background-repeat: no-repeat;
    z-index: -500;
    animation: 200s linear infinite ${planetMove};
`;