import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { HttpClientModule } from '@angular/common/http';
import { MiPorfolioComponent } from './pages/mi-porfolio/mi-porfolio.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    MiPorfolioComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistrarseComponent,
    MenuComponent,
    InicioComponent,
    SobreMiComponent,
    SkillsComponent,
    CurriculumComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
