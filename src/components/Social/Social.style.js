import styled from 'styled-components';
import media from '../../themes/media';

export const SocialStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 400px;
    z-index: 1999;
    cursor: pointer;

    div {
        flex: 1;
        
        transition: all .2s ease-in-out;

        &:hover {
            transform: translateY(-5px);
        }
    }

    ${media.tablet`
        position: fixed;
        
        width: 300px;
        left: 50%;
        margin-left: -150px;

        div{
            flex: 3;
            height: 100%;
            width: 100%;
            flex-wrap: wrap;
        }
    `}
`;