import {Component} from "angular2/core";
import {Option} from "./Option";

@Component({
    templateUrl: 'submit.html',
    selector: 'submit'
})
export class SubmitComponent {

    public option:Option = new Option('');

    onSubmit() {
        console.log('submitted');
    }

}