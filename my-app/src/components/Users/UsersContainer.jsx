import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsers, setCurrentPage, followUser, unfollowUser } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthContainer';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    }

    followUser = (userId) => {
        this.props.followUser(userId);
    }

    unfollowUser = (userId) => {
        this.props.unfollowUser(userId);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
                unfollowUser={this.unfollowUser}
                followUser={this.followUser}
                usersFollowing={this.props.usersFollowing}
            /> </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        usersFollowing: state.usersPage.usersFollowing
    }
}

export default compose(
    connect(mapStateToProps, 
        {setCurrentPage, getUsers, followUser, unfollowUser}),
        withAuthRedirect)
        (UsersContainer);;