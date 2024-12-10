import './WeatherForecast.css'

const WeatherForecast = (props) => {
    const { forecast } = props
    return (
        <div>
            <h2>{forecast.day}</h2>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p><span>conditions: {forecast.conditions}</span>current weather conditions</p>
            <p><span>time: {forecast.time}</span>time of day</p>
        </div>
    )
}

export default WeatherForecast