import {Component, OnInit} from 'angular2/core';
import {Option} from "./Option";

@Component({
    selector: 'my-app',
    templateUrl: 'app/databindings.html',
})
export class AppComponent {

    private options:Option[] = [
        new Option('toledo is awesome', 'because marzipan', 10),
        new Option('valladolid is cool', 'because lechazo')
    ];

    onClickMe($event) {
        console.log($event);
    }

    onKey(name) {
        this.options.push(new Option(name));
    }


    constructor() {
        this.property = 'empty';
        this.event = 'empty';
        this.twoway = 'empty';
    }

    property:string;
    event:string;
    twoway:string;

    newEvent($event) {
        console.log($event);
        this.event = $event;
    }

    change() {
        let random = Math.random();
        this.property = '' + random;
        this.event = '' + random;
        this.twoway = '' + random;
    }
}