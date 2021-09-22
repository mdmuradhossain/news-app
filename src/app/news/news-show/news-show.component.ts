import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleResponse } from '../article.respone';
import { NewsResponse } from '../news.response';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-show',
  templateUrl: './news-show.component.html',
  styleUrls: ['./news-show.component.css'],
})
export class NewsShowComponent implements OnInit {
  // articles: NewsResponse[];
  articles: any;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe((news) => {
      this.articles = news.articles[0];
      console.log(news.articles[0].title);
      // console.log(news.articles[0].author);
      // console.log(news.articles[0].source.name);
    });
  }
}
