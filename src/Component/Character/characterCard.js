import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import imageLoaded from '../../assets/imageLoaded.gif'

class CharacterCard extends Component {
    constructor() {
        super()
        this.state = {
            isImageLoaded: false
        }
    }

    render() {
        return (
            <Fragment>
                <Link to={`/marvel/characterDetail${this.props.id}`}>
                    <div className="ui card" style={{ margin: '10px' }}>
                        <div className="image postcardimgWrapper">
                            {
                                !this.state.isImageLoaded ? <img alt={this.props.name} className="postcardImg" src={`${imageLoaded}`} /> : null
                            }
                            <img alt={this.props.name} onLoad={() => this.setState({ isImageLoaded: true })} className="postcardImg" src={this.props.image} />
                        </div>
                        <div className="content postcardLabel">
                            <div className="font header postcardLabelText">{this.props.name}</div>
                        </div>
                    </div>
                </Link>
            </Fragment>

        )
    }

}

export default CharacterCard