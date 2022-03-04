import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/i-book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private BASE_URL: string = './assets/jsons/books.json';

  constructor(
    private http: HttpClient
  ) { }


  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.BASE_URL);
  }
}
