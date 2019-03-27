import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {

  @Input() books: any[];
  @Output('pickBook') selectEvent: EventEmitter<{index: number}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectBook(index: number) {
    this.selectEvent.emit({ index });
  }

}
