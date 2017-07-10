import { Component, OnInit } from '@angular/core';
import { News } from '../news/news';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

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
