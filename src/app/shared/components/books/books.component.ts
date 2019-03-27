import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
    <div class="row">
      <div class="col-lg-4">
      <app-books-list (pickBook)="selectBook($event)" [books]="booksList"></app-books-list>
      </div>
      <div class="col-lg-8">
        <app-book-details [book]="selectedBook"></app-book-details>
      </div>
    </div>
  `,
})
export class BooksComponent implements OnInit {

  booksList: any[] = [
    {
      title: 'Il était une fois',
      author: 'Michael CORNILLON',
      image: 'http://lorempixel.com/640/480/abstract',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorem, delectus nostrum veniam et, suscipit explicabo nihil unde minus, quos deserunt porro labore eius voluptates laboriosam perspiciatis facilis ratione!',
    },
    {
      title: 'Biographie contemporaine',
      author: 'Daphné CORNILLON',
      image: 'http://lorempixel.com/640/480/abstract',
      summary: 'Suscipit explicabo nihil unde minus, quos deserunt porro labore eius voluptates laboriosam perspiciatis facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorem, delectus nostrum veniam.',
    },
    {
      title: 'Essai sur la notion de liberté',
      author: 'Clémence CORNILLON',
      image: 'http://lorempixel.com/640/480/abstract',
      summary: 'Quos deserunt porro labore eius voluptates laboriosam perspiciatis facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorem, delectus nostrum veniam.',
    }
  ]

  selectedBook: any;

  constructor() { }

  ngOnInit() {
  }

  selectBook(e) {
    this.selectedBook = this.booksList[e.index];
  }

}
