import {connect} from "react-redux";
import CardComponent from "../../components/CardComponent";
import {
    addOpenCards,
    removeOpenCards,
    updateCard,
    addMatchesFound,
} from "../../store/actions/cards";

const mapStateToProps = state => ({
    cards: state.content.cards,
    openCards: state.content.openCards,
    opacityCards: state.content.opacityCards
})

const mapDispatchToProps = {
    updateCard,
    addOpenCards,
    removeOpenCards,
    addMatchesFound,

}

export const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardComponent)