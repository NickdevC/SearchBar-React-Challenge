import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            names: importedNames
        }
    }
    render() {
        return (
            <div>
                <h1>Name search:</h1>
                <p>Matching names found: {this.state.names.length}</p>
                <form>
                    <input type="text" name='name' placeholder='search names...'>
                    </input>
                </form>
                <div style={{margin: 'auto'}}>
                    {this.state.names.map(name => {
                            return <p key={name}>{name}</p>
                        })}
                </div>
            </div>
        )
    }
}

export default SearchBar
