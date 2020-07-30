import React from 'react';
import getWeatherData from './weather-data'
import './main-card.css';
import {format} from 'date-fns';


class MainCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: '',
            temp: '',
            description: '',
            humidity: '',
            wind: '',
            placeName: '',

        }
        this.updateData = this.updateData.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.updateData(this.props.location);
        }
    }

    componentDidMount() {
        this.updateData(this.props.location);
    }

    updateData(location) {
        getWeatherData(location).then( (data) => {
            
            try {            
                const place = data.name;
                const temp = data.main.temp;
                const humidity = data.main.humidity;
                const wind = data.wind.speed;
                const description = data.weather[0].description;
                const icon = data.weather[0].id;
    
                this.setState({
                    icon: icon,
                    temp: temp,
                    humidity: humidity,
                    wind: wind,
                    description: description,
                    placeName: place,
                }); }
                catch (err) {
                    alert("Enter 'City', 'City,Country' or 'City,State,Country'")
                }
        });
    }

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    kelvinToCelsius(temp) {
        return Math.round((temp-273.15));
    }

    kelvinToFahrenheit(temp) {
        return Math.round((temp - 273.15)*9/5 +32 );
    }

    mpsTomph(speed) {
        return Math.round(speed*2.23694*10)/10;
    }

    getFormattedDate() {
        return format(new Date(), 'EEE, LLLL d')
    }

    render() {
        return (
            <div className = {'card'}>
                <h1>{this.state.placeName}</h1>
                <h4>{this.getFormattedDate()}</h4>
                <i className = {`owf owf-${this.state.icon} owf-5x`} />
                <h1 className ={'thin-font'}>{ <>{this.kelvinToFahrenheit(this.state.temp)}&deg;F </>}</h1>
                <p> {this.toTitleCase(this.state.description)}</p>
                <span className = {'row row-spaced'}>
                    <div className = {'col col-spaced'}>
                        <div>Humidity</div>
                        <div className = {'fontsize10'}>{this.state.humidity}%</div>
                    </div>
                    <div className = {'col col-spaced'}>
                        <div>Wind</div>
                        <div className = {'fontsize10'}>{this.mpsTomph(this.state.wind)} mph</div>
                    </div>
                </span>

            </div>
        )
    }

}

export default MainCard;