import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import ConnectedTop from './pages/ConnectedTop'
import deepOrange from 'material-ui/colors/deepOrange'
import purple from 'material-ui/colors/purple'
import { Provider } from 'react-redux'
import store from './redux/store'

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
      <ConnectedTop />
    </MuiThemeProvider>
  </Provider>
)

if(rootElement){
  render(<Stoggle />, rootElement)
}
