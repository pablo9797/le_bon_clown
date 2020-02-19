import React, { Component } from 'react';
import MainThread from './component/MainThread';
import TittleTop from './component/TittleTop';
//import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        menuVisible:false,
    }

    this.isMenuVisible=this.isMenuVisible.bind(this);

    }

    isMenuVisible(){
      this.setState(prevState=> {
          return {menuVisible:!prevState.menuVisible}})
  }
  
  render(){

  return (
    <div className="App">
      <TittleTop
      isMenuVisible={this.isMenuVisible}/>

      <MainThread
      isMenuVisible={this.isMenuVisible}
      menuVisible={this.state.menuVisible}/>
    </div>
  );
}
  }
export default App;
