import React, { Component } from 'react';
import { Panel, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

class ItemList extends Component {

  render(){
    return (
      <div style={styles.container}>
        <Col xs={12} sm={6}>
          <Panel style={styles.panelStyles} header="Items Schedule" bsStyle="primary">
          </Panel>
        </Col>
      </div>
    )
  }
}


const styles = {
  panelStyles:{
    marginTop:25,
    marginBotton: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default connect() (ItemList);