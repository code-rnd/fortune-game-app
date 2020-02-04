import {connect} from "react-redux";
import InformMenuComponent from "../../components/InformMenuComponent";
import {setTimer} from "../../store/actions/timer";
import {setStateCardsDefault} from "../../store/actions/cards";

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,

    timer: state.timer.params,
});

const mapDispatchToProps = {
    setTimer,
    setStateCardsDefault
};

export const InformMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InformMenuComponent);