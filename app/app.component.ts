import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'vote.html',
})
export class AppComponent {

    private options:Option[] = [
        new Option('toledo is awesome', 'because marzipan', 20),
        new Option('valladolid is cool', 'because lechazo', 20)
    ]
}

class Option {

    constructor(public name, public description, public votes = 0) {
    }
}