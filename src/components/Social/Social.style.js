import styled from 'styled-components';

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
`;