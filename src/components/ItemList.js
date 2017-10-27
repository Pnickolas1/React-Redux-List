import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'


class ItemList extends Component {

  render(){
    return (
      <div>

          <Panel style={[{display:'flex', justifyContent: 'center'}]} header="Items Schedule" bsStyle="primary">
          </Panel>
      </div>
    )
  }
}


// component styles
const styles = {
  itemsPanel: {
    display:'flex',
    justifyContent: 'center',
  }
}

export default connect() (ItemList);