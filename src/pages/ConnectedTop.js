import { connect } from 'react-redux'
import Top from './Top'
import {
  requestAdd,
  requestToggle,
  requestDelete,
  requestGet,
  filterAll,
  filterAvailable,
  filterBusy
} from './../redux/actions'

 const mapStateToProps = state => ({
   stocks: state.stoggleReducer.stocks
 })

const mapDispatchToProps = dispatch => ({
  requestAdd: name => dispatch(requestAdd(name)),
  requestToggle: id => dispatch(requestToggle(id)),
  requestDelete: id => dispatch(requestDelete(id)),
  requestGet: () => dispatch(requestGet()),
  filterAll: () => dispatch(filterAll()),
  filterAvailable: () => dispatch(filterAvailable()),
  filterBusy: () => dispatch(filterBusy()),
})

 export default connect(mapStateToProps, mapDispatchToProps)(Top)
