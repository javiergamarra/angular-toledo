import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'vote.html',
})
export class AppComponent {

    private options:Option[] = [
        new Option('toledo is awesome', 'because marzipan', 10),
        new Option('valladolid is cool', 'because lechazo')
    ]
}

class Option {

    private status:OptionStatus;

    constructor(public name, public description, public votes = 0) {
    }
}

enum OptionStatus { Abandoned, Active }