import React, { Component } from 'react';

import groundImg from '../Assets/ground.png';

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
        bottom: '-80px',
        backgroundImage: `url(${groundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        zIndex: 5,
      }
}