import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/i-book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() test: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.test);

  }

}
