import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css']
})
export class BoardColumnComponent implements OnInit {
  data = {}
  dataIndexs = []
  index = 0
  values = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.data = data
        this.dataIndexs = Object.keys(data)
        for (let i = 0; i < 5; i++) {
          this.index = this.dataIndexs[i]
          this.values.push(data[this.index].value)
        }
      })
  }

}
