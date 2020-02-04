import {connect} from "react-redux";
import UserComponent from "../../../components/MainMenu/UserComponent";
import {setCurrentUser} from "../../../store/actions/users";
import {setTimer} from "../../../store/actions/timer";
import {setStateCardsShuffled} from "../../../store/actions/cards";

const mapStateToProps = state => ({
    timer: state.timer.params
});

const mapDispatchToProps = {
    setCurrentUser,
    setTimer,
    setStateCardsShuffled
};

export const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserComponent);