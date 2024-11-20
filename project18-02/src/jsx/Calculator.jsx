import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

function Calculator() {
    const [temperature, setTemperature] = useState({ scale: 'c', value: '' });

    const handleCelsiusChange = (temperature) => {
        setTemperature({ scale: 'c', value: temperature });
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature({ scale: 'f', value: temperature });
    }

    const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    const toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    const tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = temperature.scale === 'f' ? tryConvert(temperature.value, toCelsius) : temperature.value;
    const fahrenheit = temperature.scale === 'c' ? tryConvert(temperature.value, toFahrenheit) : temperature.value;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;
