import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: any[] = [
    {
      title: 'Il était une fois',
      author: 'Michael CORNILLON',
      image: '',
      summary: '',
    },
    {
      title: 'Biographie contemporaine',
      author: 'Daphné CORNILLON',
      image: '',
      summary: '',
    },
    {
      title: 'Essai sur la notion de liberté',
      author: 'Clémence CORNILLON',
      image: '',
      summary: '',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
