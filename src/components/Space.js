import React, { Component } from 'react';
import space from '../Assets/space.png';

class Space extends Component {
    render() {
        return (
            <div style={styles.space}>
                
            </div>
        );
    }
}

export default Space;

let styles = {
    space:{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        zIndex: -999,
        backgroundImage: `url(${space})`,
    }
}