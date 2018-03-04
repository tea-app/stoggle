import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'mateiral-ui/Modal'
import Input from 'material-ui/Input'
import ToolBar from 'material-ui/ToolBar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import CloseButton from 'material-ui-icons/Close'
import { withStyles } from 'material-ui/styles'

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

const StoggleAddModal = props => {
  const {
    classes,
    onChange,
    onClickAdd,
    onClose,
    open
  } = props

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className={classes.modal}>
        <ToolBar className={classes.modalHead} >
          <Typography variant='title'>Item name</Typography>
          <IconButton onClick={onClose} className={classes.close}>
            <CloseIcon />
          </IconButton>
        </ToolBar>
        <form className={classes.form} noValidate autoComplete='off'>
          <Input onChange={onChange} className={classes.input}></Input>
        </form>
        <ToolBar>
          <Button onClick={onClickAdd} className={classes.modalAdd} color='primary'>
            Add
          </Button>
        </ToolBar>
      </div>
    </Modal>
  )
}



export default withStyles (styles)(StoggleAddModal)
