import React, { Component } from 'react';

import logoImg from '../Assets/logo.png'

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                
            </div>
        );
    }
}

export default Logo;

let styles = {
    logo :{
        backgroundImage: `url(${logoImg})`,
        backgroundSize: 'contain',
        alignSelf: 'center',
        height: '80px',
        width: '80px',
        marginTop: '4em',
        zIndex: 100,
      }
}
