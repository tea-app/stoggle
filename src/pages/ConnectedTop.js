import { connect } from 'react-redux'
import Top from './Top'
import { requestAdd, requestToggle } from './../stoggle'

 const mapStateToProps = state => ({
   stocks: state.stoggleReducer.stocks
 })

const mapDispatchToProps = dispatch => ({
  requestAdd: (name) => dispatch(requestAdd(name)),
  requestToggle: (id) => dispatch(requestToggle(id))
})

 export default connect(mapStateToProps, mapDispatchToProps)(Top)
