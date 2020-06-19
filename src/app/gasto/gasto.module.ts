import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GastoListComponent } from './gasto-list/gasto-list.component';
import { GastoEditComponent } from './gasto-edit/gasto-edit.component';
import { GastoService } from './gasto.service';
import { GASTO_ROUTES } from './gasto.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(GASTO_ROUTES)
  ],
  declarations: [
    GastoListComponent,
    GastoEditComponent
  ],
  providers: [GastoService],
  exports: []
})
export class GastoModule { }
