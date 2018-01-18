import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
