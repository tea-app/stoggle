import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'

const StoggleListItem = ({primary}) => {
  return(
    <ListItem>
      <ListItemText primary={primary} color='inherit' />
    </ListItem>
  )
}

export default StoggleListItem