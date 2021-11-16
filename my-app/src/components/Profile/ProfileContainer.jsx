import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }
    render(){
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithDataUrlComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithDataUrlComponent);