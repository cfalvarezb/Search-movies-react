import React, { Component } from 'react';

const API_KEY = 'd6645103';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then( res => res.json() )
        .then( results => {
            console.log(results);
            const { Search = [], totalResults = '0'} = results;
            //const searchResults = Search || []; // una manera de validar si viene undefined 
            this.props.onResults(Search);
        })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>


                <div className="field has-addons">
                    <div className="control">
                        <input
                            name="q"
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movie to Search...."
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                    </button>
                    </div>
                </div>

            </form>
        )
    }
}