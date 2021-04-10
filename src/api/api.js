import React from "react";
import axios from "axios";


const url = "https://restcountries.eu/rest/v2/"

 export const getCountries = async () =>{
    const {data} = await axios.get(url);

    return data;
}

export const getCountriesInfo = async (country) =>{
    const {data} = await axios.get(`${url}name/${country}`);

    return data;
}


