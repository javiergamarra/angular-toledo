import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{name}}</h1>'
})
export class AppComponent implements OnInit {

    private name:string;

    ngOnInit():any {
        this.greet();
    }

    greet() {
        setInterval(() => {
            this.name = '' + Math.random();
        }, 500);
    }
}