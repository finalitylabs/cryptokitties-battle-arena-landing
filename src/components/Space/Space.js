import React, { Component } from 'react';
import space from '../../Assets/space.png';

class Space extends Component {
    render() {
        return (
            <div style={styles.space}>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
        );
    }
}

export default Space;

let styles = {
    space:{
        height: '100vh',
        width: '100vw',
        zIndex: -999,
        backgroundImage: 'radial-gradient(ellipse at bottom, magenta -100%, #fff 100%)',
    }
}