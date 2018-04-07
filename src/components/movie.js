
import React, { Component } from 'react';

export default class Movie extends Component {


    splitGenre = () => {
        let genre = this.props.genre;
        let newGenre = [];
        for (let i = 0; i < genre.length; i++) {
            if (i === genre.length - 1) {
                newGenre.push(<a onClick={this.props.sortBySomething.bind(null, genre[i])} key={i}>{genre[i]} </a>);
            }
            else {
                newGenre.push(<a onClick={this.props.sortBySomething.bind(null, genre[i])} key={i}>{genre[i]}, </a>);
            }
        }
        return newGenre;
    }


    splitCountry = () => {
        let country = this.props.country;
        let newCountry = [];

        for (let i = 0; i < country.length; i++) {
            if (i === country.length - 1) {
                newCountry.push(<a onClick={this.props.sortBySomething.bind(null, country[i])} key={i}>{country[i]} </a>);
            }
            else {
                newCountry.push(<a onClick={this.props.sortBySomething.bind(null, country[i])} key={i}>{country[i]}, </a>);
            }
        }
        return newCountry;
    }

    render() {

        return <div id="oneFilm">
            <span>
                <img src={this.props.img} alt="" />
                <span id="description">
                    <span id="name">{this.props.name}</span><br />
                    <span id="smallText">

                        <span><b>Страна:</b> {this.splitCountry()}</span><br />
                        <span><b>Жанр:</b> {this.splitGenre()} </span><br />
                        <span><b>Режиссер:</b> <a onClick={this.props.sortBySomething.bind(null, this.props.producer)}>{this.props.producer}</a></span><br />
                        <span><b>Год:</b> <a onClick={this.props.sortBySomething.bind(null, this.props.year)}>{this.props.year}</a></span><br />
                        <span><b>Рейтинг: <span style={{ color: 'red' }}>{this.props.rating}</span></b></span></span>

                </span><br /><br />
            </span>

        </div>;
    }
}