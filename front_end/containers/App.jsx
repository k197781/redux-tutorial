import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import Signin from './Signin.jsx'
import Auth from './Auth.jsx'
import History from './counter/History.jsx'
import CountBox from './counter/counterbox/CountBox.jsx'
import reducers from '../modules/Reducers.js'

const initialState = {
  user: null,
  countNumber: 1,
  history: []
}
const store = createStore(reducers, initialState)

// https://qiita.com/soutaito/items/691ac9dabe765e98d9f9
export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter >
          <Switch>
            <Route exact path="/signin" component={Signin}/>
            <Auth>
              <Switch>
                <Route exact path="/count" component={CountBox}/>
                <Route exact path="/history" component={History}/>
              </Switch>
            </Auth>
          </Switch>
        </BrowserRouter >
      </Provider>

    )}
}
