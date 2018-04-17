import React, { Component } from 'react';

import catBack from '../Assets/catback.png';

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
        height: '700px',
        width: '700px',
        left: '75vw',
        top: '50vh',
        backgroundImage: `url(${catBack})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 105,
      
      }
}