import {Component, OnInit, Inject, Injectable} from 'angular2/core';
import {Option} from "./Option";
import {OptionComponent} from "./option.component";
import {OptionsService} from "./OptionsService";
import {SubmitComponent} from "./submit.component";

@Component({
    selector: 'my-app',
    templateUrl: 'options.html',
    directives: [OptionComponent, SubmitComponent],
    providers: [OptionsService]
})
export class AppComponent {

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

    onKey(name) {
        let option = new Option(name);
        this.optionsService.addOption(option).subscribe(x => {
            this.getOptions();
        })
    }

    optionDeleted($event) {
        this.getOptions();
    }

}