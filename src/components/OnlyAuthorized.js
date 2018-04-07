
import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';


class OnlyAuthorized extends Component {

    componentWillMount() {
        let authorisedUser = JSON.parse(localStorage.getItem('authorized'));

        if (!authorisedUser) {
            this.props.router.push('/authorization');
        }
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}

export default withRouter(OnlyAuthorized); 
