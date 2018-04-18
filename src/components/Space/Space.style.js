import styled, { keyframes } from 'styled-components';

const starMove = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
`;

export const SpaceStyled = styled.div`
    height: 100vh;
    width: 10000vw;
    z-index: -999;
    background-image: url(${require('../../Assets/stars.png')});
    background-size: contain;
    animation: 10000s linear infinite ${starMove};
`;