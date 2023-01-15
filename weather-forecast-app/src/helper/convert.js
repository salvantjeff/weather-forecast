function kelvinToFahrenheit(number) {
    return Math.round((number - 273.15) * (9/5) + 32);
};

function kelvinToCelsius(number) {
    return Math.round(number - 273.15);
};

export { kelvinToCelsius, kelvinToFahrenheit };