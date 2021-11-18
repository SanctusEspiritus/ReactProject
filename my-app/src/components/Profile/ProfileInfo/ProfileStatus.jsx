import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editStatus: false,
        status: this.props.status
    }

    changeEditStatus = () => {
        this.setState({
            editStatus: true
        });
    }

    unchangeEditStatus = () => {
        this.setState({
            editStatus: false
        });
        this.props.setUserStatus(this.state.status);
    }
    
    onChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status 
            });
        }
    }
    render(){
        return (<div>
                {!this.state.editStatus &&
                <div>
                    <span onClick={this.changeEditStatus}>{this.props.status || "u use 20 requests"}</span>
                </div>
                }
                {this.state.editStatus &&
                <div>
                    <input onChange={this.onChange} autoFocus={true} 
                        onBlur={this.unchangeEditStatus} value={this.state.status} />
                </div>
                }
            </div>);
    }

}

export default ProfileStatus;