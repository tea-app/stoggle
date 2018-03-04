import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import DeleteIcon from 'material-ui-icons/Delete'

const styles = theme => ({
  delete: {
    marginRight: -16
  }
})

const StoggleListItem = ({primary, classes, onClick, onDelete}) => {
  return(
    <ListItem onClick={onClick}>
      <ListItemText primary={primary} color='inherit' />
      <IconButton onClick={onDelete} className={classes.delete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

export default withStyles (styles)(StoggleListItem)
