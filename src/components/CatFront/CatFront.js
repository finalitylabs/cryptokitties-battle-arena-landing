import React, { Component } from 'react';

import catFront from '../../Assets/genesis.png';

class CatFront extends Component {
    render() {
        return (
            <div style={styles.kittyfront}>
                
            </div>
        );
    }
}

export default CatFront;

let styles = {
    kittyfront :{
        position: 'absolute',
        height: '400px',
        width: '400px',
        top: '40vh',
        backgroundImage: `url(${catFront})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 80,  
      }
}
