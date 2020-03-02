import React, { Component } from 'react';
import MainThread from './component/MainThread';
import TittleTop from './component/TittleTop';
//import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        menuVisible:false,
        postModaleVisible:false,
    }

    this.isMenuVisible=this.isMenuVisible.bind(this);
    this.isPostModaleVisible = this.isPostModaleVisible.bind(this);

    }

    isMenuVisible(){
      this.setState(prevState=>{
        return{postModaleVisible:false}})
      this.setState(prevState=> {
          return {menuVisible:!prevState.menuVisible}})
  }

    isPostModaleVisible(){
      this.setState(prevState=>{
        return {menuVisible:false}})
      this.setState(prevState=>{
        return{postModaleVisible:!prevState.postModaleVisible}})
    }
  
  render(){

  return (
    <div className="App">
      <TittleTop
      isMenuVisible={this.isMenuVisible}
      isPostModaleVisible={this.isPostModaleVisible}/>

      <MainThread
      isMenuVisible={this.isMenuVisible}
      menuVisible={this.state.menuVisible}
      isPostModaleVisible={this.isPostModaleVisible}
      postModaleVisible={this.state.postModaleVisible}/>
    </div>
  );
}
  }
export default App;
