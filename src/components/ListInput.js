import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ListInput extends Component{

  render() {
    return(
      <div style={{marginTop: 35}} className="container">
      <div style={{marginBottom: 10}}>
        <label>Day:<span></span>
          <select style={{marginLeft: 10}}>
            <option selected value="">Select</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
        </label>
      </div>
      <div>
        <input lable="nutsack" className="formGroup" placeholder="Item..." />
      </div>
      <div className="buttonContainer">
        <Button style={{marginTop: 10}} bsStyle="primary">Add Item</Button>
      </div>
    </div>
    )
  }

}


export default ListInput;