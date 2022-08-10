import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {
  @Output() setValue = new EventEmitter();
  public selected = 'option2';
  public response: any;
  public value: any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.searchBreeds();
  }


  searchByCategory(v: any) {
    console.log(v.value)
      this.setValue.emit(v.value)
      this.http.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${v.value}`)
      .subscribe(( response ) => {
        console.log(response)
      })

  }

  searchBreeds() {
    this.http.get('https://api.thecatapi.com/v1/breeds')
    .subscribe(( response ) => {
      this.response = response;
      console.log(this.response)
    })
  }
}
