import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: '',    
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.text)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input className="searchField" type="text" onChange={this.handleChange}/>
                <input className="searchButton" type="submit" value="Search"/>
            </form>
        )
    }
}

export default Search;