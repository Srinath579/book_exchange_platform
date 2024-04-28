import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {

  ngOnInit(): void {
    if (!sessionStorage.getItem('userid') && !sessionStorage.getItem('token') && this.router.url !== '/signup') {
      this.router.navigate(['/login']);
    }
    else if (!sessionStorage.getItem('userid') && !sessionStorage.getItem('token') && this.router.url === '/signup') {
      this.router.navigate(['/signup']);
    }
  }
  constructor(private router: Router) { };
  Logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
