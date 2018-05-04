import { Routes } from '@angular/router';

import { MensagensComponent }   from './mensagens/mensagens.component';
//import { TableComponent }   from './table/table.component';
//import { LoginComponent }   from './login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'mensagens',
        pathMatch: 'full',
    },
    {
        path: 'mensagens',
        component: MensagensComponent
    },
]