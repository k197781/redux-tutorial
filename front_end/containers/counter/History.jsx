import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Header from '../counter/Header.jsx'

class History extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Link to="/count">Top</Link>
        <p>検索結果一覧</p>
        <ol>
        {
          this.props.history.map(history =>
            <li>{history}</li>
          )
        }
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default withRouter(connect(mapStateToProps)(History))
