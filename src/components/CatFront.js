import React, { Component } from 'react';

import catFront from '../Assets/catfront.png';

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
        height: '200px',
        width: '200px',
        left: '5vw',
        top: '60vh',
        backgroundImage: `url(${catFront})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 80,  
      }
}
