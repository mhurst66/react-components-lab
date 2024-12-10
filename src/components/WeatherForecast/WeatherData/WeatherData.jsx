import WeatherIcon from '../WeatherIcon/WeatherIcon'
import 'src/components/WeatherForecast/WeatherForecast.css'

const WeatherData = (props) => {
    const { forecast } = props
    return (
        <>
            <h2>{forecast.day}</h2>
            <WeatherIcon />
            <p>Conditions: {forecast.conditions}</p>
            <p>Time: {forecast.time}</p>
        </>
    )
}

export default WeatherData