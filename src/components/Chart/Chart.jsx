/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

export const Chart = () => {

    const [dailyData, setDailyData] = useState([]);
    console.log(dailyData);

    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await fetchDailyData());
        }
        getDailyData();
    }, [])

    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              }
              ],
            }}
          />
        ) : null
      );


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
