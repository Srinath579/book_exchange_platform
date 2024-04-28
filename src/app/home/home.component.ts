import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../app.bookService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books!: any[];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooksForCurrentUser();
  }

  getBooksForCurrentUser() {
    this.bookService.getBooksForCurrentUser().subscribe((data: any[]) => {
      this.books = data;
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
