import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export const App = () => {

  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data)
    }
    getData();
  }, [])

  const handleCountryChange = async (country) => {
    setCountry(country);
    const countryData = await fetchData(country);
    setData(countryData);
  }

  return (
    <div className={styles.container}>
      <img src="https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png" className={styles.image} alt="COVID-19" />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}
