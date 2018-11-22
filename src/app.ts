import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'App Estimator';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select' },
      { route: 'apps',  moduleId: PLATFORM.moduleName('./applications/app-detail'), name:'apps' }
    ]);

    this.router = router;
  }
}


