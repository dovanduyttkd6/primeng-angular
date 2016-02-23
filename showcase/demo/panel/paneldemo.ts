import {Component} from 'angular2/core';
import {Panel} from '../../../components/panel/panel';
import {pCode} from '../../../components/codehighlighter/codehighlighter';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'showcase/demo/panel/paneldemo.html',
    directives: [Panel,TabView,TabPanel,pCode,ROUTER_DIRECTIVES]
})
export class PanelDemo {

}