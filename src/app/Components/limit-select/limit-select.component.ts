import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/** @title Select with 2-way value binding */
@Component({
  selector: 'app-limit-select',
  templateUrl: './limit-select.component.html',
  styleUrls: ['./limit-select.component.css']
})

export class LimitSelectComponent implements OnInit {
  @Output() setLimit = new EventEmitter();
  nums = [1, 5, 10, 15, 20, 25]
  limit = 10;

  constructor() {
    
  }

  ngOnInit(): void {
    this.setLimit.emit(this.limit)
  }

  searchByLimit() {
      this.setLimit.emit(this.limit)
  }

}


