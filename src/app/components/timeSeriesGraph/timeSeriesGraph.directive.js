export function TimeSeriesGraphDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/timeSeriesGraph/timeSeriesGraph.html',
    scope: {
        'timeSeriesData': '='
    },
    controller: TimeSeriesGraphController,
    controllerAs: 'timeSeriesVM',
    bindToController: true
  };

  return directive;
}

class TimeSeriesGraphController {
  constructor () {
    'ngInject';

    // "this.time-series-data" is available by directive option "bindToController: true"
    
  }
}
