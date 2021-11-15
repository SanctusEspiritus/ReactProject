import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {authUser} from '../../redux/auth-reducer';
import { headerAPI } from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getProfile()
        .then(data => {
            let loginned = false; 
            if (data.resultCode === 0) loginned = true; 
            this.props.authUser(data.data, loginned);
        });
    }

    render() {
        return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {authUser})(HeaderContainer);