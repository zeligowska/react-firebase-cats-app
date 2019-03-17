import React, {Component} from 'react';
import  Avatar from 'react-avatar';

class MyAvatar extends Component {
    render() {
        const {user} = this.props;

        if(user.providerId === 'google.com') {
            return <Avatar src={user.photoURL} size="100" round={true} />
        }

        return (
            <Avatar name={user.displayName} size="50" round={true} />
        )
    }
}

export default MyAvatar;