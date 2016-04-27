import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent, [HTTP_PROVIDERS, JSONP_PROVIDERS, ROUTER_PROVIDERS]);