/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

export const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchedCountriesfromAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchedCountriesfromAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="">global</option>
                {fetchedCountries.map((country, index) => (
                <option key={index} option={country}>{country}</option>
                    ))}
            </NativeSelect>
        </FormControl>
    )
}
