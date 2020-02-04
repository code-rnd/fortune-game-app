import {connect} from "react-redux";
import UsersComponent from "../../../components/MainMenu/UsersComponent";

const mapStateToProps = state => ({
    users: state.users.users,
});

const mapDispatchToProps = {};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);