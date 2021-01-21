import React from 'react';


const MedellinInfo = props => {
    
    console.log(props);
    const URL_ICON = "http://openweathermap.org/img/wn/"+props.iconId+"@2x.png"
    console.log(URL_ICON);
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
                    <p>Current city</p>
                    <div className = "ciudad">
                        {props.city},{props.country}
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={URL_ICON}></img>
                                </td>
                                <td>
                                    <div className = "ciudad">
                                        {props.temperature}°C <br></br>
                                    </div>
                                    {props.description}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        {props.tempMin}°C Temp.minimum
                    </p>
                    <p>
                        {props.tempMax}°C Temp.maximun
                    </p>
                    <p>
                        {props.feelsLike}°C Feels like
                    </p>
                    <p>
                        {props.humidity}% Humidity
                    </p>

                </div>

                    :

                    <div>
                        <p>No Request yet</p>
                    </div>

            }

        </div>

    )

}

export default MedellinInfo;