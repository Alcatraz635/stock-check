import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { DataService } from '../app/components/data/data.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { TimeSeriesGraphDirective } from '../app/components/timeSeriesGraph/timeSeriesGraph.directive.js';

angular.module('sampleData', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngMaterial', 'toastr'])
	.config(config)
    .run(runBlock)
    .service('webDevTec', WebDevTecService)
    .service('data', DataService)
    .controller('MainController', MainController)
    .directive('acmeNavbar', NavbarDirective)
    .directive('timeSeries', TimeSeriesGraphDirective)
