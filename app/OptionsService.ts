import {Injectable} from "angular2/core";
import {Option} from "./Option";
import {Http, Headers} from "angular2/http";

@Injectable()
export class OptionsService {
    private headers;

    constructor(private http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    getOptions() {
        return this.http.get('http://liferay.io/voting/votes')
            .map(res => {
                console.log(res);
                return res;
            });
    }

    addOption(option:Option) {


        return this.http.post(
            'http://liferay.io/voting/votes',
            JSON.stringify(option),
            {headers: this.headers});
    }

    updateOption(option:Option) {
        return this.http.put(
            'http://liferay.io/voting/votes',
            JSON.stringify(option),
            {headers: this.headers});
    }

    deleteOption(option:Option) {
        return this.http.delete('http://liferay.io/voting/votes/' + option.id);
    }
}