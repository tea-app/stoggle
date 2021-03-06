import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import deepOrange from 'material-ui/colors/deepOrange'
import purple from 'material-ui/colors/purple'
import { Provider } from 'react-redux'
import store from './redux/store'
import history from './redux/history'

import { ConnectedRouter } from 'react-router-redux'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'

import ConnectedTop from './pages/ConnectedTop'
import config from './config'

const rootElement = document.querySelector('#root')
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: deepOrange,
  }
})

const Stoggle = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={ConnectedTop} />
          <Route exact paht='/logout' render={
            () => (
              <a href={`${config.baseURL}/api/logout`}>logout</a>
            )
          } />
        </Switch>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
)

if(rootElement){
  render(<Stoggle />, rootElement)
}
