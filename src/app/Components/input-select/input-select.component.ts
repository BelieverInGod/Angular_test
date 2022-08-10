import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {
  @Output() setValue = new EventEmitter();
  public selected = '';
  public categories: any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.searchBreeds();
  }


  searchByCategory(v: any) {
      this.setValue.emit(v.value)
  }

  searchBreeds() {
    this.http.get('https://api.thecatapi.com/v1/breeds')
    .subscribe(( categories ) => {
      this.categories = categories;
    })
  }
}
