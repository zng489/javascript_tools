/*
function get_country_info() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
get_country_info();
*/

/*
const fetch = require('node-fetch');
const fs = require('fs');
const json2csv = require('json2csv').parse;

function get_country_info() {
    fetch('https://restcountries.com/v3.1/all').then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const csv = json2csv(data);
        fs.writeFile('data.csv', csv, function(err) {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

get_country_info();

import DataFrame from "dataframe-js";
import { data, columns } from "./titanic_data.js";
*/

const fetch = require('node-fetch');

function func() {
    fetch ('https://restcountries.com/v3.1/all')
    .then(function(response) {
        return response.json();
    })
    //.then(response => response.json())

    .then(data => console.log(data))
};

func()