import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {getProfile} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getProfile})(HeaderContainer);