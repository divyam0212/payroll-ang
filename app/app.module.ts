import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './components/one.component';
import { SecondComponent } from './components/second.component';
import { HomeComponent } from './components/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { UserComponent } from './components/user.component';
import { AdminComponent } from './components/admin.component';
import { EmpForm } from './payroll/emp.component';
import { EmpComponent } from './payroll/allemp.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpService } from './payroll/services/emp.service';
import { RegistrationComponent } from './payroll/registration.component';

@NgModule({
  declarations: [
    AppComponent,OneComponent,SecondComponent,HomeComponent,LoginComponent,RegisterComponent,UserComponent,AdminComponent,EmpForm,EmpComponent,RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [/* HomeComponent *//* EmpForm */EmpComponent]
})
export class AppModule { }
