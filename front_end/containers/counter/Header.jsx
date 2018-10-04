import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div>
        <p>count number:{this.props.countNumber}</p>
        <p>user name:{this.props.user.name}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps)(Header))
