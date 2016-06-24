export class MainController {
    constructor($timeout, $log, toastr, data) {
        'ngInject';

        this.$log = $log;
        this.classAnimation = '';
        this.toastr = toastr;
        this.data = data;
        data.getData('AAPL').then((response) => {
                this.stockData = response;
                this.$log.info(this.stockData)
            })
            .catch((error) => {
                this.$log.error(`${error}`);
            });

    }
}
