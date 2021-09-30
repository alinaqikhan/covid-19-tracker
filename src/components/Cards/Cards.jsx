/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import { CardComponent } from './Card/Card';

export const Cards = ({ data }) => {

    const { confirmed, recovered, deaths, lastUpdate } = data; 

    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <CardComponent className={styles.infected} cardTitle="Infected" value={confirmed.value} lastUpdate={lastUpdate} cardSubtitle="Number of active cases of COVID-19"/>
                <CardComponent className={styles.recovered} cardTitle="Recovered" value={recovered.value} lastUpdate={lastUpdate} cardSubtitle="Number of recoveries of COVID-19"/>
                <CardComponent className={styles.deaths} cardTitle="Deaths" value={deaths.value} lastUpdate={lastUpdate} cardSubtitle="Number of deaths"/>
            </Grid>
        </div>
    )
}
