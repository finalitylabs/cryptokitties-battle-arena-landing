import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import media from '../../themes/media';


const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const LogoStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 999;
    top: -5vh;   
    width: 100%;
    }

    img {
    align-self: center;
    width: 400px;
    animation: 700ms ${fadeInDownAnimation};

    ${media.phone`
            align-self: center;
            width: 400px;
        
    `}
`;