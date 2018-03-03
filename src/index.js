import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import deepOrange from 'material-ui/colors/deepOrange'
import Top from './pages/Top'
import purple from 'material-ui/colors/purple'
import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.querySelector('#root')
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secodary: deepOrange,
  }
})

const Stoggle = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Top />
    </MuiThemeProvider>
  </Provider>
)

if(rootElement){
  render(<Stoggle />, rootElement)
}

import { requestAdd } from './stoggle'
store.dispatch(requestAdd('砂糖'))