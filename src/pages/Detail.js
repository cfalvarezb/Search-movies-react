import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtoBackToHome } from '../components/ButtonBackToHome';

const API_KEY = 'd6645103';

export class Detail extends Component {

    static propTypes = {
        //id: PropTypes.string --> forma antigua
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: {}
    }

    _fetchMovie ( { id } ) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then( res => res.json() )
        .then( movie => {
            console.log({movie});
            this.setState( { movie } )
        })
    }

    componentDidMount(){
        console.log(this.props);
        const { id } = this.props.match.params;
        this._fetchMovie( { id } ) 
    }

    _goBack() {
        window.history.back();
    }

    render () {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return (
            <div>
                {/* <button onClick={this._goBack} >Volver</button> --> Manera Ambigua */} 
                <ButtoBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} /> 
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}