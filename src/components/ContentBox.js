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
    contentBox :{
        alignSelf: 'center',
        height: '70vh',
        width: '60vw',
        background: '#232323',
        opacity: 0.6,
        zIndex: 99,
      }
}
