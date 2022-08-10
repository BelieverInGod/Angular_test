import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'


/** @title Select with 2-way value binding */
@Component({
  selector: 'app-limit-select',
  templateUrl: './limit-select.component.html',
  styleUrls: ['./limit-select.component.css']
})

export class LimitSelectComponent implements OnInit {
  @Output() setLimit = new EventEmitter();
  selected = '10';
  response: any
  nums = [1, 5, 10, 15, 20, 25]
  limit: any;

  
  constructor(private http: HttpClient) {
    
  }


  ngOnInit(): void {
  }

  searchByLimit(v: any) {
    console.log(v.value)
      this.setLimit.emit(v.value)
      this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5?limit=${v.limit}`)
      .subscribe(( response ) => {
        console.log(response)
      })
  }

}


