import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  Booklist: any[]=[];
  public emailid = window.sessionStorage.getItem('emailid');
  public username = window.sessionStorage.getItem('username');
  async ngOnInit(): Promise<void> {
    await this.appService.getUserBooks().subscribe(response => {
      this.Booklist = response.allbooks;
    });
  }
  constructor(private router: Router, private appService: AppService, private http: HttpClient) { };

  async ChangeAvailability(BookId: any) {
    await this.appService.changeAvailability(BookId).subscribe();
  }

  async DeleteUserBook(BookId: any) {
    await this.appService.deleteUserBook(BookId).subscribe();
  }
  FilterBookList(bookid: number):void{
    this.Booklist = this.Booklist.filter(item => (item.BOOK_ID !== bookid));
  }
}
