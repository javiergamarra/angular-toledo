import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1 [textContent]="name"></h1>'
})
export class AppComponent {

    private name:string = this.hola("toledo");

    hola(city:string) {
        return "hola " + name;
    }
}