import React from 'react'
import querystring from 'querystring'
import { Redirect } from 'react-router-dom'

const Callback = props => {
  const {
    location
  } = props

  const code = querystring.parse(location.search.substr(1)).code
  sessionStorage.setItem('_stoggle_key', code)

  return (
    <Redirect to='/' />
  )
}

export default Callback