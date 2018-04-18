import React, { Component } from 'react';

import catBack from '../Assets/sailor_cat.png';

class CatBack extends Component {
    render() {
        return (
            <div style={styles.kittyback}>
                
            </div>
        );
    }
}

export default CatBack;

let styles = {
    kittyback :{
        position: 'absolute',
        height: '1000px',
        width: '1000px',
        left: '55vw',
        top: '30vh',
        backgroundImage: `url(${catBack})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 1050,
      
      }
}