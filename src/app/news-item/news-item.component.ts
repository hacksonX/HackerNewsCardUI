import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  newsItem: any;

  @Input() storyID: number;
  @BlockUI() blockUI: NgBlockUI;


  constructor(private hackerNewsService: HackerNewsService) {
  }

  ngOnInit(): void {
    this.blockUI.start();
    this.hackerNewsService.getStory(this.storyID).pipe(
      finalize(
        () => {this.blockUI.stop()}
      )
    ).subscribe(
      resp => this.newsItem = resp
    )
  }

  goTo(storyUrl: string): void {
    window.location.href = storyUrl;
  }


}
