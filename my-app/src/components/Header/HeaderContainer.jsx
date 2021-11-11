import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {authUser} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            let loginned = false; 
            if (response.data.resultCode === 0) loginned = true; 
            this.props.authUser(response.data.data, loginned);
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