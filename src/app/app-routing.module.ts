import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//home page
import { IndexComponent } from './index/index.component';
//about us page
import { AboutusComponent } from './aboutus/aboutus.component';
//Casual Clothes page
import { CasualsComponent } from './casuals/casuals.component';
//Formal Clothes page
import { FormalComponent } from './formal/formal.component';
//Thematic Clothes page
import { ThematicComponent } from './thematic/thematic.component';
//Omega Clothes page
import { OmegaComponent } from './omega/omega.component';
//Sign-In Page
import { SigninComponent } from './signin/signin.component';
//Login Page
import { LoginComponent } from './login/login.component';

const routes: Routes =
[
  //home page
  {path: 'page_index', component:IndexComponent},
  //about us page
  {path: 'page_aboutus', component:AboutusComponent},
  //Casual Clothes page
  {path: 'page_casuals', component:CasualsComponent},
  //Formal Clothes page
  {path: 'page_formal', component:FormalComponent},
  //Thematic Clothes page
  {path: 'page_thematic', component:ThematicComponent},
  //Omega Clothes page
  {path: 'page_omega', component:OmegaComponent},
  //Sign-In Page
  {path: 'page_signin', component:SigninComponent},
  //Login Page
  {path: 'page_login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
