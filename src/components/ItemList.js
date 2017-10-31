import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'


class ItemList extends Component {

  render(){
    return (
      <div>

          <Panel style={styles.panelStyles} header="Items Schedule" bsStyle="primary">
          </Panel>
      </div>
    )
  }
}


const styles = {
  panelStyles:{
    justifyContent: 'center',
    width: 600,
    alignItems: 'center'
  }
}

export default connect() (ItemList);