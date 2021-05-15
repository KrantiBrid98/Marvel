import React, { Component } from 'react'
import {api} from '../api'
import md5 from 'md5'
import { Link } from 'react-router-dom'

class SearchModal extends Component {
    state = {
        query: '',
        result: []
    }

    handleInputChange = e => {
        e.preventDefault()
        this.setState({
            query: e.target.value
        }, this.getSearchData);
    }

    getSearchData = async () => {
        const ts = new Date().getTime()
        const PRIVATEKEY = '410aff201282a7c9965b296abb2d0ac6572d8e0f'
        const KEY = '92a9dd29d04a4ba1bd426cf10b22f126'
        const hash = md5(ts + PRIVATEKEY + KEY)

        const response = await api.get(`/characters`, {
            params: {
                apikey: KEY,
                ts,
                hash,
                nameStartsWith: this.state.query,
                limit: 10
            }
        })
        this.setState({ result: response.data.data.results })
    }


    render() {
        console.log(this.props, 'props')
        return (
            <div className="ui dimmer modals visible active">
                <div className="ui icon input" style={{ width: '60%', top: '60px', position: 'absolute' }}>
                    <input type="text"
                        placeholder="Search your character"
                        value={this.state.query}
                        onChange={e => this.handleInputChange(e)}
                    />
                    <i className="inverted circular search link icon"></i>
                </div>
                {this.state.result.length > 0 ?
                    <div className="ui relaxed list list_wrapper">
                        {
                            this.state.result.map(suggestion => {
                                return (
                                    <Link to={`/marvel/characterDetail${suggestion.id}`}>
                                        <div className="item" onClick={() => this.props.handlemodal(false)}>
                                            <div className="content content_wrapper">
                                                <div className="header" style={{ color: 'white' }}>
                                                    {suggestion.name}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })

                        }
                    </div>
                    : null

                }
            </div>
        )
    }
}

export default SearchModal;
