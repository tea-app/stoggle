import { connect } from 'react-redux'
import Top from './Top'
import { requestAdd } from './../stoggle'

 const mapStateToProps = state => ({
   stocks: state.stoggleReducer.stocks
 })

const mapDispatchToProps = dispatch => ({
  requestAdd: (name) => dispatch(requestAdd(name))
})

 export default connect(mapStateToProps, mapDispatchToProps)(Top)