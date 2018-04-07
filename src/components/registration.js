import React, { Component } from 'react';
import Menu from './menu.js';

export default class Registration extends Component {

    state = {
        name: '',
        password1: '',
        password2: '',
        markerName: false,
        markerPass1: false,
        markerPass2: false,
    }

    writeToStateFromInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    writeToLocalStorage = (e) => {


        if (this.state.name.trim().length && this.state.password1.trim().length > 5 && this.state.password2.trim().length > 5 && this.state.password1 === this.state.password2) {
            const users = JSON.parse(localStorage.getItem('user'));
            let newUser = { name: this.state.name, password: this.state.password1 }
            users.push(newUser);
            localStorage.setItem("user", JSON.stringify(users));
            localStorage.setItem('authorized', JSON.stringify(newUser));
            this.props.router.push('/movies');
            this.setState({ name: '', password1: '', password2: '' });
            e.preventDefault();
        }
    }

    render() {
        return <div><br />
            <br />
            <input value={this.state.name} onChange={this.writeToStateFromInputs} placeholder="Имя" name="name" className="inputForm" />
            {this.state.markerName ? <span className="validationError"> Введите имя</span> : ''}
            {this.state.name.trim().length ? <img src="checkmark.png" alt="" /> : ''}

            <br />
            <input value={this.state.password1} onChange={this.writeToStateFromInputs} placeholder="Пароль" type="password" name="password1" className="inputForm" />
            {this.state.markerPass1 ? <span className="validationError"> Введите пароль</span> : ''}
            {this.state.password1.trim().length > 5 ? <img src="checkmark.png" alt="" /> : ''}
            <br />
            <input value={this.state.password2} onChange={this.writeToStateFromInputs} placeholder="Пароль" type="password" name="password2" className="inputForm" />
            {this.state.password2.trim().length > 5 && this.state.password1 === this.state.password2 ? <img src="checkmark.png" alt="" /> : ''}
            {this.state.password2.trim().length && this.state.password1 !== this.state.password2 ? <span className="validationError"> Пароли не совпадают</span> : ''}

            <br /><br />
            <button onClick={this.writeToLocalStorage} className="myButton">Зарегистрироваться</button><br />
        </div>;
    }

}
