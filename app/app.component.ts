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

    private options:Option[];

    constructor(private optionsService:OptionsService) {
        this.options = optionsService.getOptions();
    }

    onKey(name) {
        this.options.push(new Option(name));
    }

    optionVoted($event) {
        console.log($event);
    }

}