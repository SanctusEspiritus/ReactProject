import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../API/api';
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow , toggleIsFollowing} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });
    }

    setCurrentPage = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                toggleIsFollowing={this.props.toggleIsFollowing}
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
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleIsFollowing})(UsersContainer);