import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrl: './user-requests.component.css'
})
export class UserRequestsComponent implements OnInit {
  Booklist: any[] = [];
  public emailid = window.sessionStorage.getItem('emailid');
  public username = window.sessionStorage.getItem('username');
  async ngOnInit(): Promise<void> {
    await this.appService.getUserRequests().subscribe(response => {
      this.Booklist = response.userrequests;
    });
  }
  constructor(private router: Router, private appService: AppService, private http: HttpClient) { };
  
  async DeleteUserRequest(BookId: any) {
    await this.appService.deleteUserRequest(BookId).subscribe();
  }

  FilterBookList(bookid: number): void {
    this.Booklist = this.Booklist.filter(item => (item.BOOK_ID !== bookid));
  }
}
