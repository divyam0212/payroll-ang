import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './components/one.component';
import { SecondComponent } from './components/second.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { AdminComponent } from './components/admin.component';
import { UserComponent } from './components/user.component';
import { RegistrationComponent } from './payroll/registration.component';

const routes: Routes = [
  {path:"onelink", component:OneComponent},
  {path:"twolink", component:SecondComponent},
  {path:"loginlink",component:LoginComponent},
  {path:"registerlink",component:RegisterComponent},
  {path:"register",component:RegistrationComponent},
  {path:"success1/:name",component:AdminComponent},
  {path:"success2/:name",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
