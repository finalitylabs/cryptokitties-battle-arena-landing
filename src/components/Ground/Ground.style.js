import styled from 'styled-components';
import media from '../../themes/media'


export const GroundStyled = styled.div`
    position: fixed;
    width: 100vw;
    height: 30vh;
    bottom: 0px;
    border-top: 10px solid black;
    background-image: radial-gradient(ellipse at top, cyan -75%, #fff 100%);
    z-index: 5;

    ${media.phone`
        position: fixed;
        
    `}
`;

//#2FEC86