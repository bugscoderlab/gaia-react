import { useState } from "react"

function fromCelcToFahr(celc) {
    return (celc*(9/5))+32

}

function fromFahrToCelc(fahr) {
    return (fahr-32)*(5/9);
}

function TemperatureConverter() {
    const [celcius, setCelcius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(fromCelcToFahr(celcius))

    const convertCelcToFahr = (val) => {
        setCelcius(val)
        setFahrenheit(fromCelcToFahr(val));
    }

    const convertFahrToCelc = (val) => {
        setFahrenheit(val)
        setCelcius(fromFahrToCelc(val));
    }

    return(<>
        Celcius: <input name="celcius" value={celcius} onChange = {(e) => convertCelcToFahr(e.target.value)} /><br />
        Fahrenheit: <input name="fahrenheit" value={fahrenheit} onChange = {(e) => convertFahrToCelc(e.target.value)} /><br />
    </>)
}

export default TemperatureConverter