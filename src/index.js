import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import deepOrange from 'material-ui/colors/deepOrange'
import Top from './pages/Top'
import purple from 'material-ui/colors/purple'

const rootElement = document.querySelector('#root')
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secodary: deepOrange,
  }
})

const Stoggle = () => (
  <MuiThemeProvider theme={theme}>
    <Top />
  </MuiThemeProvider>
)

if(rootElement){
  render(<Stoggle />, rootElement)
}