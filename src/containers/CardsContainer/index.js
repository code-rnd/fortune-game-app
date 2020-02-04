import {connect} from "react-redux";
import CardsComponent from "../../components/CardsComponent";
import {setTimer} from "../../store/actions/timer";
import {updateUser} from "../../store/actions/users";
import {setStateCardsDefault} from "../../store/actions/cards";

const mapStateToProps = state => ({
    cards: state.content.cards,
    openCards: state.content.openCards,
    matchesCount: state.content.matchesCount,

    name: state.timer.params.name,
    count: state.timer.params.count
})

const mapDispatchToProps = {
    setTimer,
    updateUser,
    setStateCardsDefault
}

export const CardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsComponent)