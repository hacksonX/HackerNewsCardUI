import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NewsItemComponent } from './news-item/news-item.component';
import { MatCardModule } from '@angular/material/card';
import { BlockUIModule } from 'ng-block-ui';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewsCommentComponent } from './news-comment/news-comment.component';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: '', component: StoriesComponent},
  { path: 'stories', component: StoriesComponent},
  { path: 'comments', component: NewsCommentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NewsCommentComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    BlockUIModule.forRoot(),
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
