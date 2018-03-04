import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/ToolBar'
import Typography from 'material-ui/Typography'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  tile: {
    padding: 16,
  },
  list: {
    minHeight: 300,
    backgroundColor: 'white',
  },
  add: {
    color: 'white',
    marginRight: -24
  },
  listHeader: {
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

const StoggleList = props => {
  const {
    component: Component,
    classes,
    onClick,
    listItems
  } = props

  return(
    <Component className={classes.tile}>
      <AppBar className={classes.listHeader} position='sticky'>
        <ToolBar>
          <Typography className={classes.category} variant='title' color='inherit' noWrap>stock</Typography>
        </ToolBar>
        <ToolBar>
          <IconButton onClick={this.handleOpen} className={classes.add}>
            <AddIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
      <List className={classes.list}>
        {listItems}
      </List>
    </Component>
  )
}

StoggleList.propTypes = {
  component: PropTypes.oneType([PropTypes.string, PropTypes.func]),
  classes: PropTypes.object.required,
  onClick: PropTypes.func,
  listItems: PropTypes.array
}

StoggleList.defaultProps = {
  component: 'div'
}

export default withStyles (styles)(StoggleList)
