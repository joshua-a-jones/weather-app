import React from 'react';
import SearchBar from './components/searchbar';
import MainCard from './components/main-card';



class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            searchbarText: '',
            location: 'Houston,tx,us',
        }

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchSubmit() {

        let newLocation = this.state.searchbarText;
        this.setState({
            location: newLocation,
            searchbarText: ''
        });
    }

    handleSearchChange(e) {
        let text = e.target.value;
        this.setState({searchbarText: text})
    }

    render() {
        return (
            <div className = {'container'}>
                <SearchBar 
                handleChange = {this.handleSearchChange}
                handleSubmit = {this.handleSearchSubmit}
                value = {this.state.searchbarText} />

                <MainCard location = {this.state.location}/>
            </div>
        )
    }
}

export default App;