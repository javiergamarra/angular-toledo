import {Component, Input, Output, EventEmitter} from "angular2/core";
import {NewsService} from "./news.service";
import {News} from "./news";

@Component({
    selector: 'news',
    templateUrl: 'news.html'
})
export class NewsComponent {

    constructor(private newsService:NewsService) {

    }

    @Input()
    news:News;

    @Output()
    newsDeleted = new EventEmitter<String>();

    onClickMe($event) {
        this.news.votes++;
        this.newsService.updateNews(this.news).subscribe(x => console.log(x));
    }

    delete() {
        console.log('delete');
        this.newsService.deleteNews(this.news)
            .subscribe(x => {
                this.newsDeleted.emit('deleted');
            });
    }

}