import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { QuestionsComponent } from './category/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
