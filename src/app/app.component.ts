import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  catsList: any;
  value: any;
  limit: any;
  pagination = 1

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.setLimit()
    this.setValue()
  }

  setLimit(prevLimit: string = '') {
    this.limit = prevLimit;
  }

  addPagination() {
    this.pagination++
    this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5&limit=${this.limit}&breed_ids=${this.value}&page=${this.pagination}` )
    .subscribe(( catsListPaginaton ) => {
      this.catsList = this.catsList.concat(catsListPaginaton)
    })
  }

  setValue(prevValue: string= '') {
    this.value = prevValue;
  }

  search() {
    this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5&limit=${this.limit}&breed_ids=${this.value}` )
    .subscribe(( catsList ) => {
      this.catsList = catsList;
    })
  }
}
