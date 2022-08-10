import { Component, OnInit } from '@angular/core';
import { CatServiceService } from './cat-service.service';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  visibility: boolean = false;
  response: any;
  responsePaginaton: any;
  value: any;
  limit: any;
  pagination = 1

  constructor(private http: HttpClient) {

  }

  toggle(){
		this.visibility = !this.visibility;
	}

  ngOnInit(): void {
    this.setLimit()
    this.setValue()
  }

  upPagination() {
      this.pagination = this.pagination + 1
      console.log(this.pagination)
  }

  setLimit(prevLimit: string = '') {
    if(this.pagination > 1){
      this.pagination = 1
    }
    this.limit = prevLimit;
    console.log(this.limit)
    console.log(this.pagination)
  }

  addPagination() {
    this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5&limit=${this.limit + this.pagination}&breed_ids=${this.value}` )
    .subscribe(( responsePaginaton ) => {
      this.responsePaginaton = responsePaginaton;
      console.log(this.responsePaginaton)
    })
  }

  setValue(prevValue: string= '') {
    if(this.pagination > 1){
      this.pagination = 1
    }
    this.value = prevValue;
    console.log(this.value)
    console.log(this.pagination)
  }

  search() {
    this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5&limit=${this.limit}&breed_ids=${this.value}` )
    .subscribe(( response ) => {
      this.response = response;
      console.log(this.response)
    })
  }
}
