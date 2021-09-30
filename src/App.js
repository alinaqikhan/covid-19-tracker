import React, { useEffect, useState } from 'react';
import './stylesheets/App.css';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData({data: fetchedData});
    }
    getData();
  }, [])

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  )
}
