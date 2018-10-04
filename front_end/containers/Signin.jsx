import React, { Component } from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'
import { connect } from 'react-redux'
import { withRouter, Link, Redirect } from 'react-router-dom'

function update_user(user) {
  return {
    type: 'UPDATE_USER',
    user,
  };
}

class Signin extends React.Component {
  state = {
    email: "test@kmail.com" ,
    password: "aaaaa"
  }

  handleEmailChenge = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChenge = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    request
      .post('http://localhost:8080/api/users/singn_in')
      .send({email: this.state.email})
      .send({password: this.state.password})
      .then(res => {
        this.props.updateUser(res.body)
        this
      })
      .catch(err => {
        console.log(err)
      });
  }

  render () {
    return(
      this.props.user? (
        <Redirect to={'/count'} />
      ) : (
        <div>
          <form onSubmit={this.handleSubmit} >
            <p>メールアドレス：<input type="text" name="email" value={this.state.email} onChange={this.handleEmailChenge} placeholder="example@example.com" size="20" /></p>
            <p>パスワード：<input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChenge} placeholder="password" size="20" /></p>
            <p><input type="submit" name="submit" value="ログイン" /></p>
          </form>
          <Link to="/count">履歴</Link>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, state) {
  return {
    updateUser: (user) => {
      dispatch(update_user(user))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin))
