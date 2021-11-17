import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateForRedirect = (state) => ({
    auth: state.auth.isAuth
});

export let withAuthRedirect = (Component) => {
    class ReactComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to={'/login'}/>

            return <Component {...this.props} />
        }
    }
    let ConnectAuthComponent = connect(mapStateForRedirect)(ReactComponent);
    return ConnectAuthComponent;
}
