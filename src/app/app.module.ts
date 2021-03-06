import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColorDirective } from './blue-color.directive';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes=[
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate:[AuthguardGuard],
    component: HomeComponent
  },
  {
    path:'dashboard',
    canActivate:[AuthguardGuard],
    component: DashboardComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueColorDirective,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
