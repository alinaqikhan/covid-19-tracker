import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data)
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
