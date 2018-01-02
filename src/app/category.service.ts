import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class CategoryService {
	constructor(private http: HttpClient) { }

	getCategories(){
		const randomCategory = Math.floor(Math.random() * 1200)
		const randomQuestion = Math.floor(Math.random() * 40)
		console.log(randomCategory);
		return this.http.get(`http://www.jservice.io/api/clues/?category=${randomCategory}`).map(categoryQuestions => {
			const questionsObject ={
				allQuestions: categoryQuestions,
				questionID: categoryQuestions[randomQuestion].id,
				categoryTitle: categoryQuestions[randomQuestion].category.title,
				value: categoryQuestions[randomQuestion].value,
				categoryID: categoryQuestions[randomQuestion].category_id
			}
			return questionsObject
		})
	}

}