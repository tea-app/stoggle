import React from 'react'
import { ListItem,ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  },
  selected: {
    fontWeight: 'bold'
  },
  delete: {
    marginRight: -16
  }
})

const StoggleSelectedListItem = ({primary, classes, onClick, onDelete}) => {
  return (
    <div>
      <ListItem className={classes.listItem} onClick={onClick}>
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
      <Divider />
    </div>
  )
}

export default withStyles(styles)(StoggleSelectedListItem)
