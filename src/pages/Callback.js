import React from 'react'
import axios from 'axios'
import querystring from 'querystring'
import { Redirect } from 'react-router-dom'

// console.log(google)

// const OAuth2 = google.auth.OAuth2
const CLIENT_ID = ''
const CLIENT_SECRET = ''
const REDIRECT_URI = 'http://localhost:3080/callback'

const api = code => {
  const client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  )

  client.getToken(code, (err, tokens) => {
    if (!err) {
      client.setCredentials(tokens)
      console.log(tokens)
    }
  })

  return client
}

const Callback = props => {
  const {
    location
  } = props

  const code = querystring.parse(location.search.substr(1)).code

  // const promise = api(code)
  // promise.then(res => {
  //   console.log('res:', res.body)
  // })
  // promise.catch(err => {
  //   window.alert(err)
  // })

  return (
    <Redirect to='/' />
  )
}

export default Callback