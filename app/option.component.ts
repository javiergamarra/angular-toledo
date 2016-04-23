import {Component, Input} from "angular2/core";
import {Option} from "./Option";

@Component({
    selector: 'vote',
    template: `{{option.name}}
    <button (click)="onClickMe($event)">Click me!</button>
    <p *ngIf="!!option?.votes">Votes: {{option.votes}}</p>
    <h1>{{option.name}}</h1>
    <h2>{{option?.description}}</h2>`
})
export class OptionComponent {

    onClickMe($event) {
        console.log($event);
    }

    @Input()
    private option:Option;

}