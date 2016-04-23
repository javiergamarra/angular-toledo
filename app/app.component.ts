import {Component, OnInit} from 'angular2/core';
import {Option} from "./Option";

@Component({
    selector: 'my-app',
    templateUrl: 'vote.html',
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
}