import {Component, OnInit, Inject, Injectable} from 'angular2/core';
import {Option} from "./Option";
import {OptionComponent} from "./option.component";
import {OptionsService} from "./OptionsService";
import {SubmitComponent} from "./submit.component";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'options',
    templateUrl: 'options.html',
    directives: [OptionComponent, SubmitComponent],
    providers: [OptionsService]
})
export class OptionsComponent {

    private options;

    constructor(private optionsService:OptionsService) {
        this.getOptions();
    }

    private getOptions() {
        this.optionsService.getOptions()
            .map(body => {
                    return body.json();
                }
            )
            .map(arr => {
                return arr.sort((a, b) => {
                        return b && parseInt(a.votes) < parseInt(b.votes)
                    }
                )
            })
            .subscribe(
                opts => {
                    console.log(opts);
                    this.options = opts;
                }, err => {
                    console.log(err)
                }
            );
    }

    optionDeleted($event) {
        this.getOptions();
    }

}