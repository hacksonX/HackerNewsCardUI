import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSubCommentComponent } from './news-sub-comment.component';

describe('NewsSubCommentComponent', () => {
  let component: NewsSubCommentComponent;
  let fixture: ComponentFixture<NewsSubCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSubCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSubCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
