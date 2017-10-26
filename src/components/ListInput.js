import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ListInput extends Component{

  state = {
    day: null,
    items: null,
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
          </div>
          <div className="buttonContainer">
            <Button style={{marginTop: 10}} bsStyle="primary">Add Item</Button>
          </div>
        </form>
      </div>
    )
  }

}


export default ListInput;