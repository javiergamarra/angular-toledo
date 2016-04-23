import {Component, OnInit, Inject, Injectable} from 'angular2/core';
import {Option} from "./Option";
import {OptionComponent} from "./option.component";
import {OptionsService} from "./OptionsService";

@Component({
    selector: 'my-app',
    templateUrl: 'options.html',
    directives: [OptionComponent],
    providers: [OptionsService]
})
export class AppComponent {

    private options;

    constructor(private optionsService:OptionsService) {
        optionsService.getOptions().subscribe(
            opts => {
                this.options = opts.json();
            }
        );
    }

    onKey(name) {
        this.options.push(new Option(name));
    }

    optionVoted($event) {
        console.log($event);
    }

}