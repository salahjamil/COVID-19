import React, { Component } from 'react';

// components folder
import {Cards, Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'
import Covidimg from './image/COVID19.jpg';

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country});
    
    }

    render() {
        const { data, country } =this.state;
        return (
            <div className={styles.containar}>
                <img className={styles.image} src={Covidimg} alt= "COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App
