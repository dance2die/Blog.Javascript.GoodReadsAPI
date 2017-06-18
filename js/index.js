var apiConfig = require('../apikey.js');
var defiant = require('defiant');
var proxify = require('proxify-url');
var axios = require('axios');
import YqlAjax from './yql_ajax';

export default class DemoMain {

    constructor() {
        this.goodReadsURL = `https://www.goodreads.com/shelf/list.xml`;
        this.q = `key=${apiConfig.goodreadsKey}&user_id=${apiConfig.goodreadsUserID}&page=1`;
        this.url = `${this.goodReadsURL}?${this.q}`;
    }

    logResult(url) {
        axios.get(url, { params: { format: "json" } })
            .then((yqlResponse) => {
                let data = yqlResponse.data;

                // DefiantJS XPath query for user shelf for "read" section.
                let search = JSON.search(data, "//*/user_shelf[name='read']");

                console.log(search);
            }).catch((error) => {
                alert(`error: ${error}`);
            });
    }

    firstAttempt() {
        this.logResult(this.url);
    }

    secondAttempt() {
        let yqlAjax = new YqlAjax();

        yqlAjax.ajax(this.goodReadsURL)
            .then((yqlResponse) => {
                // DefiantJS XPath query for user shelf for "read" section.
                let search = JSON.search(yqlResponse.data, "//*/user_shelf[name='read']");
                console.log(search);
            }).catch((error) => {
                alert(`error: ${error}`);
            });
    }

    thirdAttempt() {
        let proxyUrl = proxify(this.url, { inputFormat: 'xml' });

        this.logResult(proxyUrl);
    }
}


var demo = new DemoMain();
// demo.firstAttempt();
// demo.secondAttempt();
demo.thirdAttempt();




