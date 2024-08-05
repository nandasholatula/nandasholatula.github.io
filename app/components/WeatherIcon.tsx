import { useState, useEffect } from 'react';

import CloudyIcon from '../assets/weather/cloudy.svg';
import HazeIcon from '../assets/weather/haze.svg';
import HeavyRainIcon from '../assets/weather/heavy-rain.svg';
import PartlyCloudyIcon from '../assets/weather/partly-cloudy.svg';
import RainIcon from '../assets/weather/rain.svg';
import SleetIcon from '../assets/weather/sleet.svg';
import SnowIcon from '../assets/weather/snow.svg';
import SunnyIcon from '../assets/weather/sunny.svg';
import ThunderstormIcon from '../assets/weather/thunderstorm.svg';


interface IWeatherIconProps {
    code: number;
    big?: boolean;
}

const Weathericon: React.FC<IWeatherIconProps> = ({ code }) => {
    let Icon: React.ReactNode;
    console.log(code)
    switch (code) {
        case 1003:
        case 1030:
        case 1273:
            Icon = <PartlyCloudyIcon />;
            break;
        // Add other cases for different weather codes
        default:
            Icon = <SunnyIcon />;
    }

    console.log(Icon)

    return Icon; // Render the icon directly
}
export default Weathericon;
