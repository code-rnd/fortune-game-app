import {connect} from "react-redux";
import WidjetComponent from "../../components/WidjetComponent";

const mapStateToProps = state => ({
    status: state.timer.params.status
})

const mapDispatchToProps = {}

export const WidjetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WidjetComponent)