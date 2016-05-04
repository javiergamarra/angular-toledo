import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {News} from "./news";

const API = 'http://liferay.io/voting/votes';

@Injectable()
export class NewsService {
    private headers;

    constructor(private http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    getNews() {
        return this.http.get('http://liferay.io/voting/votes')
            .map(res => {
                console.log(res);
                return res;
            });
    }

    addNews(news:News) {
        return this.http.post(API, JSON.stringify(news), {headers: this.headers});
    }

    updateNews(news:News) {
        return this.http.put(API, JSON.stringify(news), {headers: this.headers});
    }

    deleteNews(news:News) {
        return this.http.delete(API + news.id);
    }
}