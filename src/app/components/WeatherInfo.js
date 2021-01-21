import React from 'react';

const WeatherInfo = props => {
    const URL_ICON = "http://openweathermap.org/img/wn/"+props.iconId+"@2x.png"
    return (
        <div>

            {
                props.error &&
                <div className = "alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }

            {
                props.temperature ?
                    <div className="card card-body">
                        <p>
                            {props.city},{props.country}
                        </p>
                        <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={URL_ICON}></img>
                                </td>
                                <td>
                                    {props.description}
                                    <div className = "ciudad">
                                        {props.temperature}°C <br></br>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    </div>
                    :

                    <div>
                        <p>No Request yet</p>
                    </div>

            }
            

        </div>

    )

}

export default WeatherInfo;