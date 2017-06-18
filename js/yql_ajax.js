var axios = require('axios');
var apiConfig = require('../apikey.js');

export default class YqlAjax {
    ajax(url) {
        // https://stackoverflow.com/a/22281596/4035
        const yqlUrl = "http://query.yahooapis.com/v1/public/yql";
        let goodReadsURL = `${url}?key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;
        let q = `select * from xml where url="${goodReadsURL}"`;

        return axios.get(yqlUrl, { 
            params: { 
                q: q, 
                format: "json" 
            }
        });
    }
}