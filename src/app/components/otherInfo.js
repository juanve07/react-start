import React from 'react';

const OtherInfo = () => {
    const URL_ICON = "http://openweathermap.org/img/wn/04n@2x.png"
    return (
        <div>
            <div className="card card-body">
                <p>
                    Palmira,CO
                </p>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={URL_ICON}></img>
                        </td>
                        <td>
                            Sunny
                            <div className = "ciudad">
                                {25}°C <br></br>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default OtherInfo;