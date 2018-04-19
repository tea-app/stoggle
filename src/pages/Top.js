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
import Avatar from 'material-ui/Avatar'
import ToolBar from 'material-ui/ToolBar'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import Snackbar from 'material-ui/Snackbar'
import StoggleList from './StoggleList'
import StoggleListItem from './StoggleListItem'
import StoggleSelectedListItem from './StoggleSelectedListItem'
import DeleteButton from 'material-ui-icons/Delete'
import StoggleAddModal from './StoggleAddModal'
import GoogleOAuthLink from '../components/GoogleOAuthLink'
import GitHubIcon from '../components/GitHubIcon'

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
    formItemName : '',
    snackbar: true
  }

  componentDidMount = () => {
    if (this.props.requestGet) {
      this.props.requestGet()
    }

    if (this.props.requestGetUserinfo) {
      this.props.requestGetUserinfo()
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

  handleDelete = id => event => {
    event.stopPropagation()
    if (this.props.requestDelete) {
      this.props.requestDelete(id)
    }
  }

  handleClickItem = id => {
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

  handleSnackbarClose = () => this.setState({
    snackbar: false
  })


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
      userinfo,
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
          <IconButton href='https://github.com/tea-app/stoggle' color='inherit' target='_blank'>
            <GitHubIcon />
          </IconButton>
          {userinfo.picture
            ? <Avatar
              alt='Avatar icon'
              src={userinfo.picture}
            />
            : <GoogleOAuthLink>Sign in</GoogleOAuthLink>
          }
          
        </ToolBar>
        <div className={classes.container}>
          <Typography
            className={classes.title}
            variant='display4'
            align='center'
          >
            Stoggle β
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
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={this.state.snackbar}
          onClose={this.handleSnackbarClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-app-is-beta',
          }}
          message={<span id='message-app-is-beta'>現在Stoggleはbeta版です。</span>}
        />
      </div>
    )
  }
}

Top.defaultProps = {
  stocks:[]
}

export default withStyles(styles)(Top)
