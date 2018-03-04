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
import Modal from 'material-ui/Modal'
import Input from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import StoggleListItem from './StoggleListItem'
import StoggleSelectedListItem from './StoggleSelectedListItem'
import DeleteButton from 'material-ui-icons/Delete'
import Paper from 'material-ui/Paper'

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
  },
  tile: {
    padding: 16,
  },
  listHeader: {
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  list: {
    minHeight: 300,
    backgroundColor: 'white',
  },
  add: {
    color: 'white',
    marginRight: -24
  },
  modal: {
    maxWidth: 400,
    width: 'calc(100% - 32px)',
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  modalHead: {
    display: 'flex'
  },
  close: {
      marginLeft: 'auto',
      marginRight: -16
  },
  form: {
    textAlign: 'center',
    margin: '0 24px'
  },
  input: {
    width: '100%',
  },
  modalAdd: {
    marginLeft: 'auto',
    marginTop: 32,
    marginBottom: 16
  }
})


// Top -------------------------------------------
class Top extends Component {
  state = {
    open: false,
    formItemName : ''
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
        <Typography className={classes.title} variant='display4' align='center'>Stoggle</Typography>
        <div className={classes.tile}>
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
        </div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.modal}>
            <ToolBar className={classes.modalHead} >
              <Typography variant='title'>Item name</Typography>
              <IconButton onClick={this.handleClose} className={classes.close}>
                <CloseIcon />
              </IconButton>
            </ToolBar>
            <form className={classes.form} noValidate autoComplete='off'>
              <Input onChange={this.handleForm} className={classes.input}></Input>
            </form>
            <ToolBar>
              <Button onClick={this.handleAdd} className={classes.modalAdd} color='primary'>
                Add
              </Button>
            </ToolBar>
          </div>
        </Modal>
      </div>
    )
  }
}

Top.defaultProps = {
  stocks:[]
}
export default withStyles(styles)(Top)
