import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ArticleComponent} from "./component/article/article.component";
import {ArticleListComponent} from "./component/article-list/article-list.component";

const routes = [
  {path: '',  component: HomeComponent},
  {path: 'article/list', component: ArticleListComponent},
  {path: 'article/:id', component: ArticleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
