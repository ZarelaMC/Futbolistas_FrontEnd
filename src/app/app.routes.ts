import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';

import { ConsultaFutbolistaComponent } from './components/consulta-futbolista/consulta-futbolista.component';



export const routes: Routes = [
 {path:"verConsultaFutbolista", component:ConsultaFutbolistaComponent },
  
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
  
