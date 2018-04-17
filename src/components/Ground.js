import React, { Component } from 'react';

import groundImg from '../Assets/ground2.png';

class Ground extends Component {
    render() {
        return (
            <div style={styles.ground}>
                
            </div>
        );
    }
}

export default Ground;

let styles = {
    ground : {
        position: 'fixed',
        bottom: -800,
        backgroundImage: `url(${groundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: 1920,
        height: 1080,
        zIndex: 5,
      }
}