import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book: Book;
  bookSubscription: Subscription;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.selectedBook.subscribe(
      book => this.book = book
    );
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
