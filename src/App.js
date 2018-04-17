import React, { Component } from 'react';


import Space from './components/Space';
import Ground from './components/Ground';
import CatFront from './components/CatFront';
import CatBack from './components/CatBack';
import ContentBox from './components/ContentBox';
import Content from './components/Content';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
          <Space />
          <Ground />
          <Logo />
          <CatFront />
          <CatBack />
          <ContentBox />
          <Content />
          
      </div>
    );
  }
}

export default App;

let styles = {
  app :{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center', 
    
  }
}


