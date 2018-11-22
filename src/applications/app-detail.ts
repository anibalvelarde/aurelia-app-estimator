import {inject} from 'aurelia-framework';

export class AppDetails{
    routeConfig;

    constructor() {}

    activate(params, routeConfig){
        this.routeConfig = routeConfig;
    }
    
}