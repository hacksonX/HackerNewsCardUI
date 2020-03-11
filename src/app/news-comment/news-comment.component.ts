import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsService } from '../hacker-news.service';

interface Comment {
  comment: string;
  kids: Array<number>
}

@Component({
  selector: 'app-news-comment',
  templateUrl: './news-comment.component.html',
  styleUrls: ['./news-comment.component.css']
})
export class NewsCommentComponent implements OnInit {

  comments = [];
  panelOpenState = false;

  constructor(private route: ActivatedRoute, private hackerNewsService: HackerNewsService) {
    this.hackerNewsService.getStory(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      response => {
        response.kids.forEach(kid => {
          this.hackerNewsService.getStory(kid).subscribe(
            comment => {
              this.comments.push(comment);
            }
          )
        });
      }
    )
  }

  ngOnInit(): void {
  }

}
