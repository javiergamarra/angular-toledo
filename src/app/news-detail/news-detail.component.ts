import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsService } from '../models/news.service';
import { News } from '../models/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent implements OnInit {

  @Input()
  news: News;

  @Output()
  newsDeleted = new EventEmitter<String>();

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
  }

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
