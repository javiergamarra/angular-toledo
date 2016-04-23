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
        optionsService.getOptions()
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

    onKey(name) {
        let option = new Option(name);
        this.options.push(option);
        this.optionsService.addOption(option)
    }

    optionVoted($event) {
        console.log($event);
    }

}