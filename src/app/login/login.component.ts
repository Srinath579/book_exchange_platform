import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    if (window.sessionStorage.getItem('emailid') != null && window.sessionStorage.getItem('token') != null) {
      this.router.navigate(['/home']);
    }
  }

  private userid: string = "";
  private usertoken: string = "";
  public errorMessage: string = '';
  constructor(private AppServe: AppService, private router: Router, private formbuilder: FormBuilder, private http: HttpClient) { }
  async onSubmit(email: any, password: any) {
    this.AppServe.createLoginSession(email, password).subscribe({
      next: (response) => {
        this.errorMessage = '';
        sessionStorage.setItem('emailid', response.emailid)
        sessionStorage.setItem('username', response.username)
        sessionStorage.setItem('token', response.token); // Store token in localStorage
        this.router.navigate(['/home']); // Redirect to protected route
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please try again later';
      }
    });
  }
}