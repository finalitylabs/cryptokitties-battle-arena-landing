import React, { Component } from 'react';

import { LogoStyled } from './Logo.style';
import logo from '../../Assets/cat_paw.png'


class Logo extends Component {
    render() {
        return (
            <LogoStyled>
                <img src={logo}/>
            </LogoStyled>
        );
    }
}

export default Logo;
