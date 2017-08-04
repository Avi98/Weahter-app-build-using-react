import Spinner from 'react-spinkit';
import React, { Component } from 'react';
import GoogleAutoCompleted from './GoogleAutocomplete';
import { connect } from 'react-redux';
import { GetUserInput } from '../Actions/GetUserInput';
import { Weather } from '../Actions/Weather';
import WeatherMessage from './WeatherMessage';
import { tempType } from '../Actions/TempType';
import toastr from 'toastr';


class WeatherForm extends Component {
    constructor() {
        super();
        let data;
        this.state = {
            selectedOption: 'F'
        };
        this.HandelSubmit = this.HandelSubmit.bind(this);
        this.handelLoadingandMessage = this.handelLoadingandMessage.bind(this);
        this.onTempChange = this.onTempChange.bind(this);
    }

    HandelSubmit(event) {
        event.preventDefault();
        let location = this.refs.googgleAutoCompleted.getLocation();
        this.props.locationName(location);
        this.props.fetchWeather(location).then(this.handelLoadingandMessage())
            .catch((error) => {
                toastr.error(error);
            });

    }

    handelLoadingandMessage() {
        let { loading, cityName, weatherData } = this.props;
        if (loading) {
            return <Spinner name="pacman" />;
        }
        else if (typeof cityName.location !== 'undefined') {

            return <WeatherMessage location={cityName.location} weather={weatherData} temp_option={this.state.selectedOption} />;
        }
    }
    onTempChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        let celcius = { checked: this.state.selectedOption === 'C' };
        let fharenhite = { checked: this.state.selectedOption === 'F' };

        return (
codeRefactoring             <div>
                <form onSubmit={this.HandelSubmit}>
                    <div className="form-group">
                        <GoogleAutoCompleted ref="googgleAutoCompleted" />
                        <fieldset>
                            <span style={{ margin: '12px' }}> Temprature: </span>
                            <label className="radio-inline" htmlFor="temp_c">

                                < input
                                    type="radio"
                                    ref="temp_c"
                                    onChange={this.onTempChange}
                                    name="tempreature"
                                    value="C"
                                    id="temp_c"
                                    {...celcius}
                                />Celcius
                                     </label>
                            <label className="radio-inline" htmlFor="temp_f">
                                < input
                                    type="radio"
                                    ref="temp_f"
                                    onChange={this.onTempChange}
                                    name="tempreature"
                                    value="F"
                                    id="temp_f"
                                    {...fharenhite}
                                />Fharenhite

                                     </label>
                        </fieldset><br />
                        <button className="btn btn-default"> Get Weather</button>
                        {this.handelLoadingandMessage()}

                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cityName: state.GetUserInput,
        weatherData: state.FetchWeather,
        loading: state.BeginAjaxCallReducer === 1,
        temp_types: state.TempType,
        ipLocation: state.GetIpLocation
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        locationName: location => dispatch(GetUserInput(location)),
        fetchWeather: location => dispatch(Weather(location)),
        temp_send: temps => dispatch(tempType(temps))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);