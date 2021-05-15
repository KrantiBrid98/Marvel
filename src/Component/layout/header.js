import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import SearchModal from './searchModal';
import GoogleAuth from '../GoogleAuth.js'
import heart from '../../assets/heart.png'

class Header extends Component {
    state = {
        openModal: false
    }

    handleInputChange = (isOpen) => {
        this.setState({ openModal: isOpen })
    }

    render() {
        console.log(this.state.openModal, 'this.state.openModal')
        return (
            <div className='headerbar'>
                <Link to='/marvel/page0'>
                    <div className='logo font'>MARVEL</div>
                </Link>
                <button className="ui inverted button signin searchBar" onClick={()=>this.handleInputChange(true)}>Search</button>
                <Link to='/marvel/comments'>
                    <img alt="comments" className="heart" src={heart}></img>
                </Link>
                <GoogleAuth />
                {
                    this.state.openModal ? ReactDOM.createPortal(<Fragment>
                        <SearchModal
                            handlemodal={this.handleInputChange}
                        /></Fragment>, document.querySelector('#modal')) : null
                }
                {/* {this.state.result.length > 0 ? this.searchListData() : null} */}
            </div>
        )
    }
}

export default Header