import {Component} from "angular2/core";
import {News} from "../news/news";
import {NewsService} from "../news/news.service";

@Component({
    templateUrl: 'submit.html',
    selector: 'submit',
    providers: [NewsService]
})
export class SubmitComponent {

    public news:News = new News('');

    constructor(private newsService:NewsService) {
    }

    onSubmit() {
        this.newsService.addNews(this.news).subscribe(x => {
            console.log('Submitted!')
        })
    }

}