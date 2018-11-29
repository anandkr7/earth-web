import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dataService:DataService) { 
    console.log("Data service connected")

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts)
    });
  }


  

}


