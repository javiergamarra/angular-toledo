import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{name}}</h1>'
})
export class AppComponent {

    private name:string = "hola toledo!";
}