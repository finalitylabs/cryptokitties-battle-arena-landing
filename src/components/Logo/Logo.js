import React, { Component } from 'react';

import logo from '../../Assets/cat_paw.png';

class Logo extends Component {
    render() {
        return (
            <div style={styles.logoStyle}>
                <img src={logo}
                     style={styles.imgStyle} />
            </div>
        );
    }
}

export default Logo;

let styles = {
    logoStyle: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        zIndex: 999,
        top: '8vh',    
        height: 128,
        width: '100%',
    
    },
    imgStyle: {
        alignSelf: 'center',
        height: 128,
        width: 128,
        
    }
}
