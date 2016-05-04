import {Component} from "angular2/core";
import {NewsService} from "../news/news.service";
import {NewsComponent} from "../news/news.component";
import {SubmitComponent} from "../submit/submit.component";

@Component({
    selector: 'newslist',
    templateUrl: 'newslist.html',
    directives: [NewsComponent, SubmitComponent],
    providers: [NewsService]
})
export class NewsListComponent {

    private newslist;

    constructor(private newsService:NewsService) {
        this.getNews();
    }

    private getNews() {
        this.newsService.getNews()
            .map(body => body.json())
            .map(arr => arr.sort((a, b) => b && parseInt(a.votes) < parseInt(b.votes)))
            .subscribe(
                news => this.newslist = news,
                err => console.log(err)
            );
    }

    newsDeleted($event) {
        this.getNews();
    }

}