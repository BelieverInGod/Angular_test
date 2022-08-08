import { Component } from '@angular/core';
import { CatServiceService } from './cat-service.service';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string = '';
  response: any;

  constructor(private http: HttpClient) {
    
  }
  search() {
    this.http.get('https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5' + this.userName)
    .subscribe(( response ) => {
      this.response = response;
      console.log(this.response)
    })
  }
}
