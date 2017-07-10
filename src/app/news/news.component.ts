import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

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
