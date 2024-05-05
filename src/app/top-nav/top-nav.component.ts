import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {
  public UserName: any = '';
  ngOnInit(): void {
    if (!window.sessionStorage.getItem('emailid') && !window.sessionStorage.getItem('token') && this.router.url !== '/signup') {
      this.router.navigate(['/login']);
    }
    else if (!window.sessionStorage.getItem('emailid') && !window.sessionStorage.getItem('token') && this.router.url === '/signup') {
      this.router.navigate(['/signup']);
    }
    this.UserName = window.sessionStorage.getItem('username');
  }
  constructor(public router: Router) { };
  Logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
