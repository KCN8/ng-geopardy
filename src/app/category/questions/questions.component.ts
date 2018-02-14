import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  data = {}

  constructor(private categoryService: CategoryService) { }

  
  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(data => {
      this.data = data
    })
  }

  dataParse = () => {
    console.log(this.data)
  }

}
