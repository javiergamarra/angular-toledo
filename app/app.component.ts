import {SubmitComponent} from "./submit.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";
import {Component} from "angular2/core";
import {OptionsComponent} from "./options.component";

@Component({
    selector: 'my-app',
    templateUrl: 'template.html',
    directives: [OptionsComponent, SubmitComponent, ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'List', component: OptionsComponent},
    {path: '/submit', name: 'Submit', component: SubmitComponent},
])
export class AppComponent {


}