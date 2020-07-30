import keys from '../apiKeys'
export default async function getWeatherData(location) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keys.openWeatherKey}`;
    try {
        let data = await fetch(url, {mode: 'cors'});
        const result = await data.json();
        return result;
    } catch (error) {
        console.log(error)
    }

}

