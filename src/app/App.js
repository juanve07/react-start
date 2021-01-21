import React, { Component } from 'react';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import MedellinInfo from './components/MedellinInfo';

import {WEATHER_KEY} from './keys';
import Medallo from './components/MedellinInfo';
import OtherInfo from './components/otherInfo';
import OtherInfo2 from './components/otherInfo2';

class App extends Component {

    state = {
        temperature: '',
        tempMin: '',
        tempMax: '',
        feelsLike: '',
        description: '',
        iconId: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather = async e =>{
        e.preventDefault(); /* Cancelar el evento por defecto (Envio) */
        const { city, country}=e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if(cityValue){
            // const API_URL = "http://api.openweathermap.org/data/2.5/weather?q="+cityValue+","+
            // countryValue+"&appid="+WEATHER_KEY+"&units=metric";

            const API_URL = "http://api.openweathermap.org/data/2.5/weather?q="+cityValue+","+
            countryValue+"&appid="+WEATHER_KEY+"&units=metric";
    
            console.log(API_URL)
            const response = await fetch(API_URL); /* await es para  seguir el codigo*/
            const data = await response.json();
            
    
            this.setState({
                temperature: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                feelsLike: data.main.feels_like,
                description: data.weather[0].description,
                iconId: data.weather[0].icon,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            })

            
        }else{
            this.setState({
                error: 'Please enter a city and a country'
            })
        }  
        
    }

    getWeatherMedellin = async e =>{
        const cityValue = "medellin";
        const countryValue = "CO";

        const API_URL_MEDE = "http://api.openweathermap.org/data/2.5/weather?q="+cityValue+","+
        countryValue+"&appid="+WEATHER_KEY+"&units=metric";

        const responseMede = await fetch(API_URL_MEDE); /* await es para  seguir el codigo*/
        const dataMede = await responseMede.json();

        this.Medallo({
            temperature: dataMede.main.temp,
            tempMin: dataMede.main.temp_min,
            tempMax: dataMede.main.temp_max,
            feelsLike: dataMede.main.feels_like,
            description: dataMede.weather[0].description,
            iconId: dataMede.weather[0].icon,
            humidity: dataMede.main.humidity,
            wind_speed: dataMede.wind.speed,
            city: dataMede.name,
            country: dataMede.sys.country,
            error: null
        })
    }

    render(){
        return(
        
            <table className = "table1" border ="0">
                    <tr>
                        <div className = "otherCities">                         
                            <WeatherForm getWeather={this.getWeather}/>
                            <br></br>
                            <br></br>
                            <tr className = "tempCity"> 
                                <WeatherInfo {...this.state}/> 
                                <td className = "tempCity"> 
                                    <OtherInfo/> 
                                </td>
                                <td className = "tempCity"> 
                                    <OtherInfo2/> 
                                </td>
                            </tr>
                        </div>

                        <td className = "currentCity">
                                <MedellinInfo {...this.state}/>
                        </td>
                    </tr>
            </table>
            
        )
    }
}

export default App;