import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/ToolBar'
import Typography from 'material-ui/Typography'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Paper  from 'material-ui/Paper'
import EventBusyIcon from 'material-ui-icons/EventBusy'
import EventAvailableIcon from 'material-ui-icons/EventAvailable'
import EventNoteIcon from 'material-ui-icons/EventNote'
import classNames from 'classnames'

const styles = theme => ({
  content: {
    padding: 16,
    marginBottom: 32
  },
  list: {
    minHeight: 300,
    backgroundColor: 'white',
  },
  eventIcon: {
    color: 'white'
  },
  add: {
    color: 'white',

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

class StoggleList extends Component {

  state = {
    // 0: すべて表示
    // 1: あるとき
    // 2: ないとき
    filter: 0
  }

  handleFilter = () => {
    const filter = (this.state.filter + 1) % 3
    this.setState({
      filter: filter
    })

    if(this.props.onFilter){
      this.props.onFilter(filter)
    }
  }

  render = () => {
    const {
      classes,
      onClick,
      listItems,
      onOpen,
      className: classNameProp
    } = this.props
    const className = classNames(
      classNameProp,
      classes.content
    )

    return(
      <div className={className}>
        <Paper className={classes.tile}>
          <AppBar className={classes.listHeader} position='sticky'>
            <ToolBar className={classes.headerContainer}>
              <Typography variant='title' color='inherit' noWrap>stock</Typography>
            </ToolBar>
            <ToolBar disableGutters>
              {
                this.state.filter === 0 &&
                <IconButton onClick={this.handleFilter} className={classes.eventIcon}>
                  <EventNoteIcon />
                </IconButton>
              }
              {
                this.state.filter === 1 &&
                <IconButton onClick={this.handleFilter} className={classes.eventIcon}>
                  <EventAvailableIcon />
                </IconButton>
              }
              {
                this.state.filter === 2 &&
                <IconButton onClick={this.handleFilter} className={classes.eventIcon}>
                  <EventBusyIcon />
                </IconButton>
              }
              <IconButton onClick={onOpen} className={classes.add} focusRipple={false}>
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
