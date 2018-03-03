import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'

const StoggleListItem = ({primary, onClick}) => {
  return(
    <ListItem onClick={onClick}>
      <ListItemText primary={primary} color='inherit' />
    </ListItem>
  )
}

export default StoggleListItem
