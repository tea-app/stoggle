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

// styles -------------------------------------------
const styles = theme => ({
  container: {
    maxWidth: 600,
    minWidth: 256,
    width: '100%',
    margin: 'auto',
  },
  title: {
    marginTop: 64,
    paddingRight: 24,
    paddingLeft: 24,
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.display3,
      color: 'white',
      marginTop: 44,
      fontSize: '5rem'
    }
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
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant='display4'
          align='center'
        >
          Stoggle
        </Typography>
        <StoggleList
          listItems={listItems}
          onOpen={this.handleOpen}
        />
        <StoggleAddModal
          onChange={this.handleForm}
          onClose={this.handleClose}
          onClickAdd={this.handleAdd}
          open={this.state.open}
        />
      </div>
    )
  }
}

Top.defaultProps = {
  stocks:[]
}

export default withStyles(styles)(Top)
