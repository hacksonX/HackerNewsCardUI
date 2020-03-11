import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { finalize } from 'rxjs/operators';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  title = 'hacker-new-card-ui';
  newsRow1 = [];
  newsRow2 = [];
  newsRow3 = [];
  news = [];
  range = 0;
  numberOfItems : number;

  @BlockUI() blockUI: NgBlockUI;


  constructor(private hackerNewsService: HackerNewsService) {

  }

  pageEvent: PageEvent;

  /**
   * getNews
   */
  public getNews() {
    this.blockUI.start();
    this.hackerNewsService.getHackerNews().pipe(
      finalize(
        () => { this.blockUI.stop() }
      )
    ).subscribe(
      response => {
        this.loadAsGrid(response); 
      }
    )
  }

  ngOnInit() {
    this.hackerNewsService.getNumberOfNewsItems().subscribe(
      resp => this.numberOfItems = resp,
      err => this.numberOfItems = Number.MAX_VALUE
    );
    this.getNews();
  }

  private loadAsGrid(news: any) {
    let newsItems = news.slice(this.range, this.range + 12);
    this.newsRow1 = [];
    this.newsRow2 = [];
    this.newsRow3 = [];
    while (newsItems.length > 0) {
      this.newsRow1.push(newsItems.shift());
      this.newsRow2.push(newsItems.shift());
      this.newsRow3.push(newsItems.shift());
    }
  }

  /**
   * nextPage
   */
  public nextPage() {
    this.range = this.range + 12;
    this.getNews();
  }

  /**
   * previousPage
   */
  public previousPage() {
    if (this.range > 0) {
      this.range = this.range - 12;
      this.getNews();
    }
  }

  paginate() {
    if(this.pageEvent.pageIndex > this.pageEvent.previousPageIndex) {
      this.nextPage();
    }
    else {
      this.previousPage();
    }
  }

}
