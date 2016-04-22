import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{option.name}}</h1><h2>{{option.description}}</h2>'
})
export class AppComponent {

    private option:Option = {
        name: 'toledo is awesome',
        description: 'because marzipan',
        votes: 20
    };
}

class Option {
    name:String;
    description:String;
    votes:Number;

    constructor(name, desc, votes) {
        this.name = name;
        this.description = desc;
        this.votes = votes;
    }
}