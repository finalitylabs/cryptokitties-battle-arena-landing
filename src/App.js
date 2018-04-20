import React, { Component } from 'react';

import Space from './components/Space/Space';
import Ground from './components/Ground/Ground';
import CatFront from './components/CatFront/CatFront';
import CatBack from './components/CatBack/CatBack';
import Content from './components/Content/Content';
import Logo from './components/Logo/Logo';
import ContentBox from './components/ContentBox/ContentBox';
import { AppStyled } from './App.style';
import Social from './components/Social/Social';
import Planet from './components/Planet/Planet';

class App extends Component {

  render() {
    return (
      <AppStyled>
          <Logo />
          <Space /> 
          <Planet />        
          <Ground />
          <CatFront />
          <CatBack />
          <ContentBox />
          <Content />
          <Social />
      </AppStyled>
    );
  }
}

export default App;





