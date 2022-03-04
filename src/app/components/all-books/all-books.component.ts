import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { IBook } from 'src/app/interfaces/i-book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  constructor(
    private books: BooksService
  ) { }

  allBooks: IBook[];

  ngOnInit(): void {
    this.books.getAllBooks().subscribe(data => {
      this.allBooks = data;
    });
  }
}
