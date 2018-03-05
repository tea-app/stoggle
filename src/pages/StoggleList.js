import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/ToolBar'
import Typography from 'material-ui/Typography'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Paper  from 'material-ui/Paper'

const styles = theme => ({
  content: {
    padding: 16
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
  headerContainer: {
    paddingLeft: 16
  }
})

const StoggleList = props => {
  const {
    classes,
    onClick,
    listItems,
    onOpen
  } = props

  return(
    <div className={classes.content}>
      <Paper className={classes.tile}>
        <AppBar className={classes.listHeader} position='sticky'>
          <ToolBar className={classes.headerContainer}>
            <Typography variant='title' color='inherit' noWrap>stock</Typography>
          </ToolBar>
          <ToolBar>
            <IconButton onClick={onOpen} className={classes.add}>
              <AddIcon />
            </IconButton>
          </ToolBar>
        </AppBar>
        <List className={classes.list}>
          {listItems}
        </List>
      </Paper>
    </div>
  )
}

StoggleList.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  listItems: PropTypes.array,
  onOpen: PropTypes.func
}

StoggleList.defaultProps = {
  component: 'div'
}

export default withStyles(styles)(StoggleList)
