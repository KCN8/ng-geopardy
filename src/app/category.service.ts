import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class CategoryService {
	constructor(private http: HttpClient) { }

	getCategories():Observable<any>{
		const randomCategory = Math.floor(Math.random() * 1200)
		const randomQuestion = Math.floor(Math.random() * 40)
		return this.http.get(`http://www.jservice.io/api/clues/?category=${randomCategory}`).map(categoryQuestions => {
			const questionsObject ={
				allQuestions: categoryQuestions,
				questionID: categoryQuestions[randomQuestion].id,
				categoryTitle: categoryQuestions[randomQuestion].category.title,
				value: categoryQuestions[randomQuestion].value,
				categoryID: categoryQuestions[randomQuestion].category_id
			}
			console.log(questionsObject)
			return questionsObject
		})
	}

}