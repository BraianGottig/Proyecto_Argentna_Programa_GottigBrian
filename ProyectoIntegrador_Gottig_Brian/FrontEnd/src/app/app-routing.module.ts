import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiPorfolioComponent } from './pages/mi-porfolio/mi-porfolio.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent} from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';

const routes: Routes = [
  { 
    path:'', component:MiPorfolioComponent
  },
  {
    path:'home', component:MiPorfolioComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'registrarse', component: RegistrarseComponent
  },
  {
    path:'**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
