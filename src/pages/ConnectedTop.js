import { connect } from 'react-redux'
import Top from './Top'
import { requestAdd, requestToggle, requestDelete } from './../stoggle'

 const mapStateToProps = state => ({
   stocks: state.stoggleReducer.stocks
 })

const mapDispatchToProps = dispatch => ({
  requestAdd: (name) => dispatch(requestAdd(name)),
  requestToggle: (id) => dispatch(requestToggle(id)),
  requestDelete: (id) => dispatch(requestDelete(id))
})

 export default connect(mapStateToProps, mapDispatchToProps)(Top)
