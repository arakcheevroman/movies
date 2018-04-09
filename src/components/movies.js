import React, { Component } from 'react';
import Movie from './movie.js'


export default class Movies extends Component {

    state = {
        movies: [
            { name: 'Терминатор 2: Судный день', country: ['США'], genre: ['боевик', 'триллер', 'фантастика'], producer: 'Джеймс Кэмерон', year: 1991, rating: 9.37, img: 'picmovies/poster75442_1_p.jpg' },
            { name: 'Побег из Шоушенка', genre: ['драма'], country: ['США'], producer: 'Фрэнк Дарабонт', year: 1994, rating: 9.34, img: 'picmovies/poster2768_3_prev.jpg' },
            { name: 'Властелин колец 3: Возвращение Короля', country: ['США', 'Новая Зеландия'], genre: ['боевик', 'приключения', 'фэнтези'], producer: 'Питер Джексон', year: 2003, rating: 9.32, img: 'picmovies/poster2608_1_prev.jpg' },
            { name: 'Профессионал', genre: ['боевик', 'драма'], country: ['Франция'], producer: 'Жорж Лотнер', year: 1981, rating: 9.32, img: 'picmovies/poster28992_1_p.jpg' },
            { name: 'Властелин колец 2: Две крепости', country: ['США', 'Новая Зеландия'], genre: ['боевик', 'приключения', 'фэнтези'], producer: 'Питер Джексон', year: 2002, rating: 9.24, img: 'picmovies/poster2611_2_prev.jpg' },
            { name: 'Форрест Гамп', country: ['США'], genre: ['драма', 'комедия', 'мелодрама'], producer: 'Роберт Земекис', year: 1994, rating: 9.16, img: 'picmovies/poster13096_1_prev.jpg' },
            { name: 'Властелин колец: Братство кольца', country: ['США', 'Новая Зеландия'], genre: ['боевик', 'приключения', 'фэнтези'], producer: 'Питер Джексон', year: 2001, rating: 9.13, img: 'picmovies/poster2606_3_prev.jpg' },
            { name: 'Список Шиндлера', country: ['США'], genre: ['биографический', 'военный', 'драма', 'исторический'], producer: 'Стивен Спилберг', year: 1993, rating: 9.12, img: 'picmovies/poster3635_2_prev.jpg' },
            { name: 'Титаник', country: ['США'], genre: ['драма', 'исторический', 'мелодрама'], producer: 'Джеймс Кэмерон', year: 1997, rating: 9.11, img: 'picmovies/poster18199_1_prev.jpg' },
            { name: 'Иван Васильевич меняет профессию', country: ['СССР'], genre: ['комедия', 'приключения', 'фантастика'], producer: 'Леонид Гайдай', year: 1973, rating: 9.11, img: 'picmovies/poster2634_2_prev.jpg' },
            { name: 'Пролетая над гнездом кукушки', country: ['США'], genre: ['драма'], producer: 'Милош Форман', year: 1975, rating: 9.10, img: 'picmovies/poster3572_2_prev.jpg' },
            { name: 'Храброе сердце', country: ['США'], genre: ['боевик', 'военный', 'драма'], producer: 'Мел Гибсон', year: 1995, rating: 9.09, img: 'picmovies/poster3590_3_prev.jpg' },
            { name: 'Аватар', country: ['США'], genre: ['боевик', 'драма', 'фантастика'], producer: 'Джеймс Кэмерон', year: 2009, rating: 9.06, img: 'picmovies/poster9623_1_prev.jpg' },
        ],
        page: 1,
        inputText: '',
        sortBySomething: '',
        flagReverseSort: true,
        flagForPagination: false

    }

    sortByYear = () => {
        if (this.state.flagReverseSort) {
            this.setState({
                movies: this.state.movies.sort((a, b) => a.year - b.year),
                flagReverseSort: !this.state.flagReverseSort
            });
        }
        else {
            this.setState({
                movies: this.state.movies.sort((a, b) => b.year - a.year),
                flagReverseSort: !this.state.flagReverseSort
            });
        }
    }

    sortByRating = () => {
        if (this.state.flagReverseSort) {
            this.setState({
                movies: this.state.movies.sort((a, b) => a.rating - b.rating),
                flagReverseSort: !this.state.flagReverseSort
            });
        }
        else {
            this.setState({
                movies: this.state.movies.sort((a, b) => b.rating - a.rating),
                flagReverseSort: !this.state.flagReverseSort
            });
        }
    }

    sortByName = () => {
        if (this.state.flagReverseSort) {
            this.setState({
                movies: this.state.movies.sort((a, b) => a.name.localeCompare(b.name)),
                flagReverseSort: !this.state.flagReverseSort
            });
        }
        else {
            this.setState({
                movies: this.state.movies.sort((a, b) => b.name.localeCompare(a.name)),
                flagReverseSort: !this.state.flagReverseSort
            });
        }
    }

    generateRenderTable = page => { this.setState({ page }); }

    turnRight = (value) => {
        this.state.page < value ? this.setState({ page: this.state.page + 1 }) : false;
    }

    turnLeft = () => {
        this.state.page > 1 ? this.setState({ page: this.state.page - 1 }) : false;
    }

    changeInput = e => this.setState({ inputText: e.target.value });

    sortBySomething = value => {
        console.log(value);
        this.setState({ sortBySomething: value, flagForPagination: true });
    }




    render() {

        let moviesFromState = this.state.movies;

        let moviesFilter = moviesFromState.slice((this.state.page - 1) * 5, this.state.page * 5);
        let text = this.state.inputText.toLowerCase();

        if (this.state.inputText) {
            moviesFilter = this.state.movies.filter(el => el.name.toLowerCase().indexOf(text) !== -1 || el.country.join(' ').toLowerCase().indexOf(text) !== -1 || el.producer.toLowerCase().indexOf(text) !== -1 || el.genre.join(' ').toLowerCase().indexOf(text) !== -1);
        }

        if (this.state.sortBySomething) {
            moviesFilter = this.state.movies.filter(el => el.producer === this.state.sortBySomething || el.year === this.state.sortBySomething || el.country.includes(this.state.sortBySomething) || el.genre.join(' ').toLowerCase().indexOf(this.state.sortBySomething) !== -1 || el.country.join('').toLowerCase().indexOf(this.state.sortBySomething) !== -1);
        }


        // создаем кол-во страниц
        let count, countLinks;
        !this.state.flagForPagination ? count = moviesFromState.length : count = moviesFilter.length;
        count % 5 > 0 ? countLinks = Math.floor(count / 5) + 1 : countLinks = Math.floor(count / 5);

        let links = [];
        for (let i = 0; i < countLinks; i++) {
            links.push(<a key={i} onClick={this.generateRenderTable.bind(null, i + 1)}> {i + 1} </a>);
        }
        //

        if (this.state.flagForPagination) {
            moviesFilter = moviesFilter.slice((this.state.page - 1) * 5, this.state.page * 5);
        }

        const movies = moviesFilter.map((el, index) => {
            return <Movie
                name={el.name}
                country={el.country}
                surname={el.surname}
                genre={el.genre}
                producer={el.producer}
                year={el.year}
                rating={el.rating}
                img={el.img}
                sortBySomething={this.sortBySomething}
                sortInArray={this.sortInArray}
                key={index}
            />;
        });

        return <div>
            <br />
            <input onChange={this.changeInput} /><br /><br />
            {movies}
            <span onClick={this.turnLeft}>←</span>{links}<span onClick={this.turnRight.bind(this, countLinks)}>→</span>
            <p>Сортировать по:
				<b><a onClick={this.sortByYear}> году, </a></b>
                <b><a onClick={this.sortByRating}>рейтингу, </a></b>
                <b><a onClick={this.sortByName}>имени</a> </b>
            </p>
        </div>;

    }
}


