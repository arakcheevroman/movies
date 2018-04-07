
import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';


class OnlyUnAuthorized extends Component {

    componentWillMount() {
        let authorisedUser = JSON.parse(localStorage.getItem('authorized'));

        if (authorisedUser) {
            this.props.router.push('/movies');
        }
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}

export default withRouter(OnlyUnAuthorized); 
