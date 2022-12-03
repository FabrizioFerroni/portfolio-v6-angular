import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarDesktopComponent } from './template/navbar-desktop/navbar-desktop.component';
import { NavbarMovilComponent } from './template/navbar-movil/navbar-movil.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { SlidersComponent } from './components/proyectos/sliders/sliders.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienSoyComponent,
    ProyectosComponent,
    ContactoComponent,
    NavbarDesktopComponent,
    NavbarMovilComponent,
    FooterComponent,
    HomeComponent,
    SlidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
