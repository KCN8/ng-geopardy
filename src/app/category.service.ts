import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
	constructor(private http: HttpClient) { }
	
	getCategories(){
		const randomCategory = Math.floor(Math.random() * 200)
		const randomQuestion = Math.floor(Math.random() * 40)
		this.http.get(`http://www.jservice.io/api/clues/?category=${randomCategory}`).subscribe(categoryQuestions => {
			const questionsObject ={
				allQuestions: categoryQuestions,
				questionID: categoryQuestions[randomQuestion].id,
				categoryTitle: categoryQuestions[randomQuestion].category.title,
				value: categoryQuestions[randomQuestion].value,
				categoryID: categoryQuestions[randomQuestion].category_id
			}
			console.log(`The category number is ${randomCategory} and the question number is ${randomQuestion}`, questionsObject)
		})
	}

}