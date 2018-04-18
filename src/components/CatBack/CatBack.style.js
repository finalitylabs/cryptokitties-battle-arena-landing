import styled from 'styled-components';

export const CatBackStyled = styled.div`
    position: absolute;
    height: 1000px;
    width: 1000px;
    left: 55vw;
    top: 30vh;
    background-image: url(${require('../../Assets/sailor_cat.png')});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1050;
`;

