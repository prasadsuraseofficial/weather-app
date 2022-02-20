import Home from "../pages/Home"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    favoriteCities: state.cityReducer.favoriteCities,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

