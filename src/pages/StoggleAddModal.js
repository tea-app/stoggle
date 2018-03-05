import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'material-ui/Modal'
import Input from 'material-ui/Input'
import ToolBar from 'material-ui/ToolBar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import CloseButton from 'material-ui-icons/Close'
import { withStyles } from 'material-ui/styles'
import CloseIcon from 'material-ui-icons/Close'
import { FormControl } from 'material-ui/Form'

const styles = theme => ({
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
      marginRight: -16,
  },
  form: {
    textAlign: 'center',
    margin: '0 24px',
    display: 'block'
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

const StoggleAddModal = props => {
  const {
    classes,
    onChange,
    onClickAdd,
    onClose,
    open
  } = props

  const onKeyPress = event => {
    if(event.key === 'Enter'){
      onClickAdd()
      event.preventDefault()
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      disableRestoreFocus
    >
      <div className={classes.modal}>
        <ToolBar className={classes.modalHead} >
          <Typography variant='title'>Item name</Typography>
          <IconButton onClick={onClose} className={classes.close}>
            <CloseIcon />
          </IconButton>
        </ToolBar>
        <FormControl className={classes.form}>
          <Input autoFocus onChange={onChange} className={classes.input} onKeyPress={onKeyPress}></Input>
        </FormControl>
        <ToolBar>
          <Button onClick={onClickAdd} className={classes.modalAdd} color='primary'>
            Add
          </Button>
        </ToolBar>
      </div>
    </Modal>
  )
}

export default withStyles(styles)(StoggleAddModal)
