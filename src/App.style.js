import styled from 'styled-components';
import media from './themes/media';


export const AppStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    overflow: hidden;

    ${media.phone`
        height: 100vh;
    `}
`;