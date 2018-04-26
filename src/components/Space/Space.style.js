import styled, { keyframes } from 'styled-components';
import media from '../../themes/media'


const starMove = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
`;


export const SpaceStyled = styled.div`
    height: 100vh;
    width: 10000vw;
    z-index: -999;
    background-image: url(${require('../../Assets/galaxy.png')});
    background-size: contain;
    animation: 5000s linear infinite ${starMove};

    ${media.tablet`
        animation: none;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    `}

    
`;

