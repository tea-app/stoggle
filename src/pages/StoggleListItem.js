import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import DeleteIcon from 'material-ui-icons/Delete'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  },
  delete: {
    marginRight: -16
  }
})

const StoggleListItem = ({primary, classes, onClick, onDelete}) => {
  return(
    <div>
      <ListItem className={classes.listItem} onClick={onClick}>
        <ListItemText primary={primary} color='inherit' />
        <IconButton onClick={onDelete} className={classes.delete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </div>
  )
}

export default withStyles(styles)(StoggleListItem)
