import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  allQuestions
  categoryID
  categoryTitle
  questionID
  value

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      // .subscribe(data => {
      //   this.allQuestions = data.allQuestions
      //   this.categoryID = data.categoryID
      //   this.categoryTitle = data.categoryTitle
      //   this.questionID = data.questionID
      //   this.value = data.value
      // })
  }

}
