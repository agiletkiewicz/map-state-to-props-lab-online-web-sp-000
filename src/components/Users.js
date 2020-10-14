import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'



class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map( user => (
            <l1>{user.username}</l1>
          ))}
          
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
