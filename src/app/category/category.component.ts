import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://www.jservice.io/api/clues/?category=${Math.floor(Math.random() * 300)}`).subscribe(categoryQuestions => {
      const categoryTitle = categoryQuestions[Math.floor(Math.random() * 40)].category.title
      const value = categoryQuestions[1].value
      console.log(value)
    })
  }

}
