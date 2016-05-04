import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";
import {Component} from "angular2/core";
import {SubmitComponent} from "./submit/submit.component";
import {NewsListComponent} from "./list/newslist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'template.html',
    directives: [NewsListComponent, SubmitComponent, ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'List', component: NewsListComponent},
    {path: '/submit', name: 'Submit', component: SubmitComponent},
])
export class AppComponent {


}