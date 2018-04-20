import styled, { keyframes } from 'styled-components';

const starMove = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
`;


export const SpaceStyled = styled.div`
    height: 120vh;
    width: 10000vw;
    z-index: -999;
    background-image: url(${require('../../Assets/star2.png')});
    background-size: contain;
    animation: 5000s linear infinite ${starMove};
`;

