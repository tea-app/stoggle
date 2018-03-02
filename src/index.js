import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'

const rootElement = document.querySelector('#root')

function App() {
  return (
    <Button variant="raised" color="primary">
      Hello,stoggle
    </Button>
  );
}

render(<App />, rootElement)