import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, setUserStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthContainer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (userId === undefined) {
            userId = this.props.autorizedUser;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render(){
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>;
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUser: state.auth.id
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, setUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);