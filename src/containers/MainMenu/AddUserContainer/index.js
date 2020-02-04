import {connect} from "react-redux";
import AddUserComponent from "../../../components/MainMenu/AddUserComponent";
import {addUser} from "../../../store/actions/users";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    addUser
};

export const AddUserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUserComponent);