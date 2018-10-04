import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Auth extends React.Component {
  render() {
    return (
      this.props.user? (
        <Route children={this.props.children} />
      ) : (
        <Redirect to={'/signin'} />
      )
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps)(Auth));
