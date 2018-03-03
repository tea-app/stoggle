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

const styles = theme => ({
  container: {
    maxWidth: 600,
    minWidth: 256,
    width: '100%',
    margin: 'auto',
  },
  title: {
    marginTop: 96,
    color: 'white',
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
  selected: {
    fontWeight: 'bold'
  },
  add: {
    color: 'white',
    marginRight: -24
  },
  modal: {
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
  modalAdd: {
    marginLeft: 'auto',
    marginTop: 32,
    marginBottom: 16
  }
})

class Top extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  
  render = () => {
    const {classes} = this.props
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
          <ListItem>
            <ListItemText primary='塩' color='inherit' />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
             primary={
               <Typography className={classes.selected} varint='subheading' color='secondary'>砂糖</Typography>
             }
             disableTypography
            />
          </ListItem>
          <Divider />
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
              <Input></Input>
            </form>
            <ToolBar>
              <Button className={classes.modalAdd} color='primary'>
                Add
              </Button>
            </ToolBar>
          </div>
        </Modal>
      </div>
    )
  }
}


export default withStyles(styles)(Top)