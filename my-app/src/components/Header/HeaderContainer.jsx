import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {loginOut} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    render() {
        return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginOut})(HeaderContainer);