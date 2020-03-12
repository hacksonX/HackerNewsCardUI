import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';

@Component({
  selector: 'app-news-sub-comment',
  templateUrl: './news-sub-comment.component.html',
  styleUrls: ['./news-sub-comment.component.css']
})
export class NewsSubCommentComponent implements OnInit {

  @Input() kids: any;
  comments = [];

  constructor(private hackerNewsService: HackerNewsService) { 
    

  }

  ngOnInit(): void {
    this.kids.forEach(kid => {
      this.hackerNewsService.getStory(kid).subscribe(
        resp => {
          this.comments.push(resp)
        }
      )
    });
  }

}
