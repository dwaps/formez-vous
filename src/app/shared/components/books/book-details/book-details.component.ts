import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: any = {
    title: 'Il était une fois',
    author: 'Michael CORNILLON',
    image: 'http://lorempixel.com/640/480/abstract',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae, repellat quaerat, atque quisquam reprehenderit quas ut ducimus possimus nemo laudantium cum praesentium saepe consequuntur nostrum doloremque nulla soluta sit?',
  }

  constructor() { }

  ngOnInit() {
  }

}
