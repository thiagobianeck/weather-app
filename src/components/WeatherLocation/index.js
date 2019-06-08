import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';

const WeatherLocation = () => (
    <div>
        <Location city={'Barcelona'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;
