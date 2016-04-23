import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Option} from "./Option";

@Component({
    selector: 'vote',
    template: `
    <button (click)="onClickMe($event)">Click me!</button>
    <p *ngIf="!!option?.votes">Votes: {{option.votes}}</p>
    <h1>{{option.name}}</h1>
    <h2>{{option?.description}}</h2>`
})
export class OptionComponent {

    @Output()
    optionVoted = new EventEmitter<String>();

    onClickMe($event) {
        this.option.votes++;
        this.optionVoted.emit(this.option);
    }

    @Input()
    private option:Option;

}