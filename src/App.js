import React, { Component } from 'react';


import Space from './components/Space';
import Ground from './components/Ground';
import CatFront from './components/CatFront';
import CatBack from './components/CatBack';
import Content from './components/Content';
import Logo from './components/Logo';
import ContentBox from './components/ContentBox';

class App extends Component {

  render() {
    return (
      <div style={styles.app}>
          <Logo />
          <Space />          
          <Ground />
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




