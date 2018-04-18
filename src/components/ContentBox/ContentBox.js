import React, { Component } from 'react';

class ContentBox extends Component {
    render() {
        return (
            <div style={styles.contentBox}>
                
            </div>
        );
    }
}

export default ContentBox;

let styles = {
    contentBox: {
        position: 'absolute',
        borderRadius: 10,
        paddingLeft: 50,
        paddingRight: 50,
        color: '#000',
        border: '5px solid black',
        boxShadow: '2px 2px 20px 5px rgba(0,0,0,0.2)',
        top: '7.5em',
        fontSize: '1.4em',
        alignSelf: 'center',
        height: '60vh',
        width: '50vw',
        zIndex: 888,
        background: 'white',
        overflow: 'scroll',
      }
}