import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './requests/requests.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{ path: "", redirectTo: "login", pathMatch: "full" },
{ path: "login", component: LoginComponent },
{ path: "signup", component: SignupComponent },
{ path: "home", component: HomeComponent },
{ path: "requests", component: RequestsComponent },
{ path: "user-requests", component: UserRequestsComponent },
{ path: "user-profile", component: UserProfileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }