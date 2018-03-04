import React from 'react'
import { ListItem,ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

const styles = theme => ({
  selected: {
    fontWeight: 'bold'
  },
  delete: {
    marginRight: -16
  }
})

const StoggleSelectedListItem = ({primary, classes, onClick, onDelete}) => {
  return (
    <ListItem onClick={onClick}>
      <ListItemText
        primary={
          <Typography className={classes.selected} varint='subheading' color='secondary'>{primary}</Typography>
        }
        disableTypography
      />
      <IconButton onClick={onDelete} className={classes.delete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

export default withStyles(styles)(StoggleSelectedListItem)
