import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
