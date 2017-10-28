import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ListInput from './ListInput'
import ItemList from './ItemList'
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

class App extends Component {

  addAItem = () =>{
    this.props.addNewItem({})
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - Redux List Generator</h1>
        </header>
        <ListInput />
        <ItemList />
      </div>
    );
  }
}


function mapStateToProps(item){
  
  return {
    items: ["this", "that", "and", "this"]
  }
}

function mapDispatchToProps(dispatch){
  return{
    addNewItem : (data) => dispatch(addItem(data))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App)
