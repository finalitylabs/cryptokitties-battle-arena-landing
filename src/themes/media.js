import { css } from 'styled-components';

const sizes = {
    phone: 415,
    tablet: 768,
    desktop: 1080,
    giant: 1170
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
    return {
        ...finalMedia,
        [size]: function(...args){
            return css`
                @media(max-width: ${sizes[size]}px) {
                ${css(...args)}
                }
            `;
        }
    };
}, {});


export default media;