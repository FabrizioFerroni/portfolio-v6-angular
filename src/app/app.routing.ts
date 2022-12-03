import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { InicioComponent } from "./components/inicio/inicio.component";

const appRoute: Routes = [

  { path: '', component: InicioComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contactame', component: ContactoComponent },

  // { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute, { scrollPositionRestoration: 'enabled' });
