import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../models/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
})
export class AddNewsComponent implements OnInit {

  public news: News = new News('');

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newsService.addNews(this.news).subscribe(x => {
      console.log('Submitted!')
    })
  }

}
