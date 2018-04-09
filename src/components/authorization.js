import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Authorization extends Component {
    state = {
        name: '',
        password1: '',
        markerName: false,
        markerPass1: false,
        users: [],
        isauthorized: false,
        errorShow: false
    }

    writeToStateFromInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.state.name.length) { this.setState({ markerName: false }) };
        if (this.state.password1) { this.setState({ markerPass1: false }) };
    }

    writeToLocalStorage = (e) => {
        var users = JSON.parse(localStorage.getItem("user"));
        if (this.state.name.length === 0) {
            this.setState({ markerName: true });
        }

        if (this.state.password1.length === 0) {
            this.setState({ markerPass1: true });
        }

        const [exisitingUser] = users.filter(el => {
            if (el.name === this.state.name && el.password === this.state.password1) {
                return true;
            }
            return false;
        });

        console.log('existing', exisitingUser);

        if (exisitingUser) {
            localStorage.setItem('authorized', JSON.stringify(exisitingUser));
            this.props.router.push('/movies');
        }
    }

    render() {



        return <div><br />
            <br />


            <input value={this.state.name} onChange={this.writeToStateFromInputs} placeholder="Имя" name="name" className="inputForm" />
            {this.state.name.length < 1 && this.state.markerName ? <span className="validationError"> Введите имя</span> : ''}

            <br />
            <input value={this.state.password1} onChange={this.writeToStateFromInputs} placeholder="Пароль" type="password" name="password1" className="inputForm" />
            {this.state.password1.length < 1 && this.state.markerPass1 ? <span className="validationError"> Введите пароль</span> : ''}

            <br /><br />
            <button onClick={this.writeToLocalStorage} className="myButton">Войти</button><br />
            {/* {this.state.isauthorized ? <Movies /> : false} */}

        </div>;
    }
}

export default withRouter(Authorization); 
