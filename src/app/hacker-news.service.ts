import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: HttpClient) {
    
   }

   /**
    * getHackerNews
    */
   public getHackerNews(): Observable<any> {
     return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
   }

   public getStory(storyId: number): Observable<any> {
     return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty');
   }

   public getNumberOfNewsItems(): Observable<any> {
     return this.http.get('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty');
   }
}
