import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.value === '') {return};
        this.props.handleSubmit(e);
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className = {'row border-bar'}>
                    <input 
                        type = {'text'} 
                        placeholder = {'Search for a City'} 
                        onChange = {this.handleChange}
                        value = {this.props.value} />
                    
                    <button 
                    type = {'submit'} className = {'button-blank'}>
                        <i className = {'fa fa-search button-icon'} />
                    </button>
                </div>
            </form>
        )
    }
}


export default SearchBar;