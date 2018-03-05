import React, { Component } from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import List, {
  ListItem,
  ListItemText
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/ToolBar'
import AddIcon from 'material-ui-icons/Add'
import { fade } from 'material-ui/styles/colorManipulator'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import StoggleList from './StoggleList'
import StoggleListItem from './StoggleListItem'
import StoggleSelectedListItem from './StoggleSelectedListItem'
import DeleteButton from 'material-ui-icons/Delete'
import StoggleAddModal from './StoggleAddModal'
import SvgIcon from 'material-ui/SvgIcon'

// styles -------------------------------------------
const styles = theme => ({
  container: {
    maxWidth: 600,
    minWidth: 256,
    width: '100%',
    margin: 'auto',
  },
  title: {
    paddingTop: 64,
    paddingRight: 24,
    paddingLeft: 24,
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.display3,
      color: 'white',
      marginTop: 0,
      fontSize: '5rem'
    }
  },
  list: {
    marginTop: 16
  },
  githubIcon: {
    color: 'white',
    position: 'absolute',
    top: 0,
    right: 0
  }
})


// Top -------------------------------------------
class Top extends Component {
  state = {
    open: false,
    formItemName : ''
  }

  componentDidMount = () => {
    if (this.props.requestGet) {
      this.props.requestGet()
    }
  }

  handleForm = event => {
    this.setState({
      formItemName: event.target.value
    })
  }

  handleAdd = () => {
    this.handleClose()
    if(this.state.formItemName === ''){
      return
    }
    if(this.props.requestAdd){
      this.props.requestAdd(this.state.formItemName)
    }
  }

  handleDelete = id => {
    return () => {
      this.props.requestDelete(id)
    }
  }

  handleClickItem = (id) => {
    return () => {
      this.props.requestToggle(id)
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({
      open: false,
      formItemName: ''
    })
  }


  handleFilter = filter => {
    switch(filter) {
    case 0:
      this.props.filterAll()
      return

    case 1:
      this.props.filterAvailable()
      return

    case 2:
      this.props.filterBusy()
      return

    default:
      return
    }
  }


  render = () => {
    const {
      classes,
      stocks
    } = this.props

    const listItems = stocks.map(stock => {
      return stock.status
      ? <StoggleListItem key={stock.id} primary={stock.name} onClick={this.handleClickItem(stock.id)} onDelete={this.handleDelete(stock.id)} />
      : <StoggleSelectedListItem key={stock.id} primary={stock.name} onClick={this.handleClickItem(stock.id)} onDelete={this.handleDelete(stock.id)} />
    })

    return(
      <div>
        <ToolBar className={classes.githubIcon}>
          <IconButton href="https://github.com/tea-app/stoggle" color='inherit'>
            <SvgIcon>
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
            </SvgIcon>
          </IconButton>
        </ToolBar>
        <div className={classes.container}>
          <Typography
            className={classes.title}
            variant='display4'
            align='center'
          >
            Stoggle
          </Typography>
          <StoggleList
            className={classes.list}
            listItems={listItems}
            onOpen={this.handleOpen}
            onFilter={this.handleFilter}
          />
          <StoggleAddModal
            onChange={this.handleForm}
            onClose={this.handleClose}
            onClickAdd={this.handleAdd}
            open={this.state.open}
          />
        </div>
      </div>
    )
  }
}

Top.defaultProps = {
  stocks:[]
}

export default withStyles(styles)(Top)
