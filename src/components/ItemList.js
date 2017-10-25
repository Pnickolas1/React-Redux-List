import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

class ItemList extends Component {

  render(){
    return (
      <div style={{alignItems: 'center'}}>
          <Panel style={styles.itemsPanel} header="Items Schedule" bsStyle="primary">
          </Panel>
      </div>
    )
  }
}


// component styles
const styles = {
  itemsPanel: {
    marginTop: 25,
    position: 'absolute',
    alignItems: 'center',
    width: 600,
  }
}

export default ItemList;