import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addItem } from '../actions/index';

class ListInput extends Component{

  state = {
    items: null
  }


  addThisItem = () => {
    this.props.addToDoItem({})
  }
 


  render() {
    return(
      <div style={{marginTop: 35}} className="container">
        <form>
          <div>
            <label>To Do Item: 
            <input value={this.state.value} onChange={(e) => this.setState({items: e.target.value})} style={{marginLeft: 10}} lable="nutsack" className="formGroup" placeholder="..." />
            </label>
          </div>
          <div>
          {JSON.stringify(this.state.items)}
          {JSON.stringify(this.props.items)}
          </div>
          <div className="buttonContainer">
            <Button style={{marginTop: 10}} bsStyle="primary">Add Item</Button>
          </div>
        </form>
      </div>
    )
  }

}

function mapStateToProps(item){

  return{
    items:null
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToDoItem: (data) => dispatch(addItem(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (ListInput);