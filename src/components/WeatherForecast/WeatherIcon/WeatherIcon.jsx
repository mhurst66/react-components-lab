// import './components/WeatherForecast.css'

const WeatherIcon = (props) => {
    const { forecast } = props
    return (
        <img src={forecast.img} alt={forecast.imgAlt} />
    )
}

export default WeatherIcon