import React from 'react'
import { ListItem,ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  selected: {
    fontWeight: 'bold'
  }
})

const StoggleSelectedListItem = ({primary, classes, onClick}) => {
  return (
    <ListItem onClick={onClick}>
      <ListItemText
        primary={
          <Typography className={classes.selected} varint='subheading' color='secondary'>{primary}</Typography>
        }
        disableTypography
      />
    </ListItem>
  )
}

export default withStyles(styles)(StoggleSelectedListItem)
