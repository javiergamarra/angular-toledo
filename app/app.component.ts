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
        let option = new Option(name);
        this.options.push(option);
        this.optionsService.addOption(option)
    }

    optionVoted($event) {
        console.log($event);
    }

}