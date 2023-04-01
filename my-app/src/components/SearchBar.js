import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'search names...',
        }
    }
    render() {
        return (
            <div>
                <h1>Name search:</h1>
                <form>
                    <label></label>
                    <input type="text" name='name' placeholder='search names...'>
                    </input>
                </form>
                <div>We will render names here</div>
            </div>
        )
    }
}

export default SearchBar
