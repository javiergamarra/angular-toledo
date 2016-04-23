import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Option} from "./Option";
import {OptionsService} from "./OptionsService";

@Component({
    selector: 'vote',
    templateUrl: 'vote.html'
})
export class OptionComponent {

    constructor(private optionsService:OptionsService) {

    }

    @Output()
    optionDeleted = new EventEmitter<String>();

    onClickMe($event) {
        this.option.votes++;
        this.optionsService.updateOption(this.option).subscribe(x => console.log(x));
    }

    delete() {
        console.log('delete');
        this.optionsService.deleteOption(this.option)
            .subscribe(x => {
                this.optionDeleted.emit('deleted');
            });
    }

    @Input()
    private option:Option;

}