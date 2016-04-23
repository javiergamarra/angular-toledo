import {Injectable} from "angular2/core";
import {Option} from "./Option";
import {Http} from "angular2/http";

@Injectable()
export class OptionsService {

    // private options:Option[] = [
    //     new Option('toledo is awesome', 'because marzipan', 10),
    //     new Option('valladolid is cool', 'because lechazo')
    // ];

    // getOptions() {
    //     return this.options;
    // }

    constructor(private http:Http) {
    }

    getOptions() {
        return this.http.get('http://liferay.io/voting/votes')
            .map(res => {
                console.log(res);
                return res;
            });
    }
}