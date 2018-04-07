
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {

    render() {
        return <div>
            <Link to="/">Главная</Link>&nbsp;&nbsp;
            <Link to="/registration">Регистрация</Link>&nbsp;&nbsp;
            <Link to="/authorization">Вход</Link>&nbsp;&nbsp;
            <Link to="/about">О приложении</Link>&nbsp;&nbsp;
            <Link to="/movies">Фильмы</Link>

        </div>;
    }
}