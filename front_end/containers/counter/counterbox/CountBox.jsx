import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Add from './Add'
import Reduce from './Reduce'
import Style from '../../App.css'

// import { add_number, reduce_number } from '../../../modules/ActionCreater.js'

import Header from '../../counter/Header.jsx'

function update_user(user) {
  return {
    type: 'UPDATE_USER',
    user,
  };
}
function add_number() {
  return {
    type: 'ADD_NUMBER'
  };
}
function reduce_number() {
  return {
    type: 'REDUCE_NUMBER'
  };
}

class CountBox extends React.Component {
  state = {
    isCalcStatusPlus: true
  }

  toggleCalcStatus = () => {
    const calcStatus = this.state.isCalcStatusPlus
    this.setState({
      isCalcStatusPlus: !calcStatus
    })
  }

  handleReduceNumber = () => {
    this.props.reduceNumber()
  }

  handleAddNumber = () => {
    this.props.addNumber()
  }

  handleLogout = () => {
    this.props.updateUser(null)
  }

  render () {
    return(
      <div>
        <Header />
        <div>
          {
            this.state.isCalcStatusPlus
            ?<div>
              ADD<button type="button" name="plus" onClick={this.handleAddNumber}>+</button>
              <button type="button" name="plus" onClick={this.toggleCalcStatus}>引き算を出現させる</button>
            </div>
            :<div>
              REDUCE<button type="button" name="minus" onClick={this.handleReduceNumber}>-</button>
              <button type="button" name="plus" onClick={this.toggleCalcStatus}>足し算を出現させる</button>
            </div>
          }
        </div>
        <div>
          <button type="button" name="logout" onClick={this.handleLogout}>ログアウト</button>
        </div>
        <Link to="/history">履歴</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, state) {
  return {
    updateUser: () => {
      dispatch(update_user(null))
    },
    addNumber: () => {
      dispatch(add_number())
    },
    reduceNumber: () => {
      dispatch(reduce_number())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountBox)
