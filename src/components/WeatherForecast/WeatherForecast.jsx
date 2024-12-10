import WeatherData from './WeatherData/WeatherData'
import './WeatherForecast.css'

const WeatherForecast = (props) => {
    const { forecast } = props
    return (
        <div className='weather'>
            <h2>{forecast.day}</h2>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p><span>Conditions: {forecast.conditions}</span></p>
            <p>Time: {forecast.time}</p>
        </div>
    )
}

export default WeatherForecast