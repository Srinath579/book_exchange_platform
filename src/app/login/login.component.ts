import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    if (sessionStorage.getItem('userid') && sessionStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  private userid: string = "";
  private usertoken: string = "";
  public errorMessage: string = '';
  constructor(private AppServe: AppService, private router: Router, private formbuilder: FormBuilder, private http: HttpClient) { }
  async onSubmit(email: any, password: any) {
    this.http.post<any>(this.AppServe._LOGIN_API_ENDPOINT, { email: email, password: password }) // Replace with your actual API endpoint
      .subscribe({
        next: (response) => {
          this.errorMessage = '';
          sessionStorage.setItem('userid', response.userid)
          sessionStorage.setItem('token', response.token); // Store token in localStorage
          this.router.navigate(['/home']); // Redirect to protected route
        },
        error: (error) => {
          this.errorMessage = 'Login failed. Please try again later';
        }
      });
  }
}