import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
    if (window.sessionStorage.getItem('email') && window.sessionStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }
  public errorMessage: string = '';
  constructor(private AppServe: AppService, private router: Router, private formbuilder: FormBuilder, private http: HttpClient) { }
  async onSubmit(username:any, email: any, password: any, repassword: any) {
    if (password === repassword) {
      this.AppServe.registerUser(username, email, password).subscribe({
        next: (response) => {
          this.errorMessage = '';
          this.router.navigate(['/login']); // Redirect to protected route
        },
        error: (error) => {
          this.errorMessage = 'Sign Up failed. Please try again later';
        }
      });
    }
    else {
      this.errorMessage = 'Passwords does not match';
    }
  }
}
