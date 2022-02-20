import CityRow from "../components/CityRow/CityRow"
import { connect } from "react-redux"
import { addNewCity, activeCity } from "../services/actions/actions"

const mapStateToProps = (state) => ({
    cities: state.cityReducer
})

const mapDispatchToProps = (dispatch) => ({
    addNewCityHandler: (data) => dispatch(addNewCity(data)),
    activeCityHandler: (data) => dispatch(activeCity(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CityRow);