# Weather-App
A simple weather app to retrieve weather data from the Open Weather Map API for a given city.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Project setup
This project requires a Open Weather Maps API key. Before compiling, you must make a file called `apiKeys.js` in the src directory. In the file, include the follwing code:

```
module.exports = {
    "openWeatherKey" : <Your Open Weather maps API key>
}
```

### installs required node modules
```
npm install
```

### opens development server
```
npm start
````

### compiles and minifies for production and builds app in build folder
```
npm run build
```
