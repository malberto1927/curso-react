import React, {Component} from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault()

        console.log('submit')
    }

    render() {
        return (
            <Search handleSubmit={this.handleSubmit} title="formulario"/>
        )
    }
}

export default SearchContainer