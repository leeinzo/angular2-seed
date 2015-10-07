import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import { bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS } from 'angular2/http';
import { MyAppComponent } from 'app/components/my-app/my-app';

bootstrap(MyAppComponent, [
    ROUTER_BINDINGS,
    HTTP_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]);