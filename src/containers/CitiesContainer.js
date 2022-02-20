import Cities from "../pages/Cities"
import { connect } from "react-redux"
import {addFavoriteCity} from "../services/actions/actions"

const mapStateToProps = (state) => ({
    cities: state.cityReducer.cities,
    activeCity: state.cityReducer.activeCity,
    favoriteCities: state.cityReducer.favoriteCities,
})

const mapDispatchToProps = (dispatch) => ({
    addFavoriteCityHandler: (data) => dispatch(addFavoriteCity(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities)