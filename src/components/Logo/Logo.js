import React, { Component } from 'react';

import { LogoStyled } from './Logo.style';
import logo from '../../Assets/logo.png'


class Logo extends Component {
    render() {
        return (
            <LogoStyled>
                <img src={logo} alt='logo' width=''/>
            </LogoStyled>
        );
    }
}

export default Logo;
