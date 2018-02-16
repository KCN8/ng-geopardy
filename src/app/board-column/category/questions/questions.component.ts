import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    
  }

  

}
