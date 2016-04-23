import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Option} from "./Option";
import {OptionsService} from "./OptionsService";

@Component({
    selector: 'vote',
    template: `
    <button (click)="onClickMe($event)">Click me!</button>
    <p *ngIf="!!option?.votes">Votes: {{option.votes}}</p>
    <h1>{{option.name}}</h1>
    <h2>{{option?.description}}</h2>`
})
export class OptionComponent {

    constructor(private optionsService:OptionsService) {

    }

    @Output()
    optionVoted = new EventEmitter<Option>();

    onClickMe($event) {
        this.option.votes++;
        this.optionVoted.emit(this.option);
        this.optionsService.updateOption(this.option);
    }

    @Input()
    private option:Option;

}