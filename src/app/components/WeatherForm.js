import React from 'react';

const WeatherForm = props => (
    <div>
        <form onSubmit = {props.getWeather}>
            <div className = "form-grop">
                <input type="text" class="redondeado" name = "city" placeholder = "Search other cities..."autoFocus/>
            </div>
            <div>
                <input type= "hidden" name = "country" placeholder = "Your country Name"
                className = "form-control"/>
            </div>
            <button hidden = 'true' className="btn btn-success btn-block">
                Obtener clima   
            </button>
        </form>

    </div>
);

export default WeatherForm;