export class DataService {
    constructor($http) {
        'ngInject';
        this.URL = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?callback=JSON_CALLBACK'
        this.$http = $http;
    } 

    getData(symbol) {
        return this.$http({
            method: 'jsonp',
            url: `${this.URL}`,
            params: { symbol: symbol }
        })
        .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error(`${error}`);
            });
        
    }
}