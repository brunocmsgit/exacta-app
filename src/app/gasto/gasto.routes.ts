import { Routes } from '@angular/router';
import { GastoListComponent } from './gasto-list/gasto-list.component';
import { GastoEditComponent } from './gasto-edit/gasto-edit.component';

export const GASTO_ROUTES: Routes = [
  {
    path: 'gastos',
    component: GastoListComponent
  },
  {
    path: 'gastos/:id',
    component: GastoEditComponent
  }
];
