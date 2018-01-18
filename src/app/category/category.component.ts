import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  allQuestions
  categoryID
  categoryTitle
  questionID
  value

  constructor(private categoryService: CategoryService, private http: HttpClient) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.allQuestions = data.allQuestions
        this.categoryID = data.categoryID
        this.categoryTitle = data.categoryTitle
        this.questionID = data.questionID
        this.value = data.value
      })
  }
}
