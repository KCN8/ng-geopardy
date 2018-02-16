import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryComponent } from './board-column/./category/category.component';
import { CategoryService } from './category.service';
import { QuestionsComponent } from './board-column/./category/questions/questions.component';
import { BoardColumnComponent } from './board-column/board-column.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionsComponent,
    BoardColumnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
