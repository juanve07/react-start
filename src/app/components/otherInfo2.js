import React from 'react';

const OtherInfo2 = () => {
    const URL_ICON = "http://openweathermap.org/img/wn/02d@2x.png"
    return (
        <div>
            <div className="card card-body">
                <p>
                    Bogotá,CO
                </p>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={URL_ICON}></img>
                        </td>
                        <td>
                            few clouds 
                            <div className = "ciudad">
                                {18}°C <br></br>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default OtherInfo2;