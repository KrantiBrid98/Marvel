import React, {Component} from 'react'
import {api} from '../api'
import md5 from 'md5'
import Loader from '../layout/loader'
import SeriesComDetails from '../Character/seriesComDetails'

class MovieDetails extends Component {

    state = {
        seriesDetails: null
    }

    componentDidMount() {
        this.getComicList();
    }

    getComicList = () => {
        const ts = new Date().getTime()
        const PRIVATEKEY = '410aff201282a7c9965b296abb2d0ac6572d8e0f'
        const KEY = '92a9dd29d04a4ba1bd426cf10b22f126'
        const hash = md5(ts + PRIVATEKEY + KEY)
        api.get(`/characters/${this.props.match.params.charId}/series?apikey=${KEY}&ts=${ts}&hash=${hash}`)
            .then(response => {
                this.setState({ seriesDetails: response.data.data.results })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.seriesDetails) {
            return <Loader />
        }
        return (
            <div><SeriesComDetails details={this.state.seriesDetails}/></div>
        )
    }
}

export default MovieDetails