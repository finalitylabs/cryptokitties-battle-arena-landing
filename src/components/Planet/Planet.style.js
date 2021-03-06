import styled, { keyframes } from 'styled-components';
import media from '../../themes/media'

const planetMove = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-250%);
    }
`;


export const PlanetStyled = styled.div`
    position: fixed;
    left: 100vw;
    top: 40vh;
    height: 60vh;
    width: 60vw;
    background-image: url(${require('../../Assets/pluto.png')});
    background-repeat: no-repeat;
    z-index: -500;
    animation: 300s linear infinite ${planetMove};

    ${media.phone`
        display: none;
    `}
`;