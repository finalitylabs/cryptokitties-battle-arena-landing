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
        width: '100vw',
        height: '25vh',
        bottom: 0,
        borderTop: '10px solid black',
        backgroundImage: 'radial-gradient(ellipse at top, #2FEC86 -100%, #fff 100%)',
        zIndex: 5,
      }
}