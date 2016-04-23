import {Injectable} from "angular2/core";
import {Option} from "./Option";

@Injectable()
export class OptionsService {

    private options:Option[] = [
        new Option('toledo is awesome', 'because marzipan', 10),
        new Option('valladolid is cool', 'because lechazo')
    ];

    getOptions() {
        return this.options;
    }
}