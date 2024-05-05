import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  Booklist!: any[];
  async ngOnInit(): Promise<void> {
    await this.appService.getAllBooks().subscribe(response => {
      this.Booklist = response.allbooks;
    });
  }
  constructor(private router: Router, private appService: AppService, private http: HttpClient) { };

  SubmitRequest(BookId: any) {
    console.log(BookId);
  }
}
