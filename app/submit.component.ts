import {Component} from "angular2/core";
import {Option} from "./Option";
import {OptionsService} from "./OptionsService";

@Component({
    templateUrl: 'submit.html',
    selector: 'submit',
    providers: [OptionsService]
})
export class SubmitComponent {

    public option:Option = new Option('');

    constructor(private optionsService:OptionsService) {
    }

    onSubmit() {
        this.optionsService.addOption(this.option).subscribe(x => {
            console.log('Submitted!')
        })
    }

}