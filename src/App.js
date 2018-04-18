import React, { Component } from 'react';

import Space from './components/Space/Space';
import Ground from './components/Ground/Ground';
import CatFront from './components/CatFront/CatFront';
import CatBack from './components/CatBack/CatBack';
import Content from './components/Content/Content';
import Logo from './components/Logo/Logo';
import ContentBox from './components/ContentBox/ContentBox';

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




