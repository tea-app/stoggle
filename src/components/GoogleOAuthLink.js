import React from 'react'

const uri = 'https://accounts.google.com/o/oauth2/auth'
  + '?client_id=942723636095-tb9voi5kr6gh1oc1c9kkcto5ordq5dub.apps.googleusercontent.com'
  + '&scope=profile'
  + '&response_type=code'
  + '&redirect_uri=http://localhost/api/callback'

const GoogleOAuthLink = props => {
  const {
    component: Component,
    ...other
  } = props

  return <Component href={uri} {...other}/>
}

GoogleOAuthLink.defaultProps = {
  component: 'a'
}

export default GoogleOAuthLink