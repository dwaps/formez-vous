import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit, OnDestroy {

  books: any[];
  bookSubscription: Subscription;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.booksList.subscribe(
      books => this.books = books || []
    );
  }

  selectBook(index: number) {
    this.bookService.selectBook(index);
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
