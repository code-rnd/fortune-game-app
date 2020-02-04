import {connect} from "react-redux";
import IosSwitchComponent from "../../../components/utils/IosSwitchComponent";
import {setOpacityCards} from "../../../store/actions/cards";

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    setOpacityCards
}

export const IosSwitchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IosSwitchComponent)