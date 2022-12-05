import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contactame', component: ContactoComponent },

  // { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });

