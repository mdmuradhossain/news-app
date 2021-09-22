import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl: string = 'https://newsapi.org/v2/everything';
  apiKey: any = '7443707e1fe847d59782363093292211';

  url =
    'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'sortBy=popularity&' +
    'apiKey=7443707e1fe847d59782363093292211';
  constructor(private http: HttpClient) {}

  getNews() {
    // return this.http.get('https://newsapi.org/v2/everything?', {
    //   headers: {
    //     q: 'apple',
    //     apiKey: '7443707e1fe847d59782363093292211',
    //   },
    // });
    // return this.http.get(this.url);
    return this.http.get(
      'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'sortBy=popularity&' +
        'apiKey=7443707e1fe847d59782363093292211'
    );
  }
}
