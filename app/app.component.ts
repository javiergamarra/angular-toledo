import {Component, OnInit} from 'angular2/core';
import {Option} from "./Option";
import {OptionComponent} from "./option.component";

@Component({
    selector: 'my-app',
    templateUrl: 'options.html',
    directives: [OptionComponent]
})
export class AppComponent {

    private options:Option[] = [
        new Option('toledo is awesome', 'because marzipan', 10),
        new Option('valladolid is cool', 'because lechazo')
    ];

    onKey(name) {
        this.options.push(new Option(name));
    }

}