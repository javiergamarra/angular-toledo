import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';
import { SubmitComponent } from './submit/submit.component';
import { NewsService } from './news/news.service';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Route[] = [
  {path: '', component: NewsListComponent},
  {path: 'submit', component: SubmitComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
