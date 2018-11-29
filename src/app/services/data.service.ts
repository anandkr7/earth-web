import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http :Http) { 

  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json())
  }
}