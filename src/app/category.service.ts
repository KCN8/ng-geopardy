import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class CategoryService {
	constructor(private http: HttpClient) { }

	getCategories(){
		const randomCategory = Math.floor(Math.random() * 100)
		return this.http.get(`https://cors-anywhere.herokuapp.com/http://www.jservice.io/api/clues/?category=${randomCategory}`)
	}

}