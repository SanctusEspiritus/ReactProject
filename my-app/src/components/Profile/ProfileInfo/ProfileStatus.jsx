import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editStatus: false
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
    }
    
    render(){
        return (<div>
                {!this.state.editStatus &&
                <div>
                    <span onClick={this.changeEditStatus}>{this.props.status}</span>
                </div>
                }
                {this.state.editStatus &&
                <div>
                    <input autoFocus={true} onBlur={this.unchangeEditStatus} value={this.props.status} />
                </div>
                }
            </div>);
    }

}

export default ProfileStatus;