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
          <div style={{marginBottom: 10}}>
            <label>Day:<span></span>
              <select style={{marginLeft: 10}}>
                <option defaultValue="">Select</option>
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
            <label>To Do Item: 
            <input onChange={(e) => this.setState({items: e.target.value})} style={{marginLeft: 10}} lable="nutsack" className="formGroup" placeholder="..." />
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