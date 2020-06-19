import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto';

@Component({
  selector: 'app-gasto',
  templateUrl: 'gasto-list.component.html'
})
export class GastoListComponent implements OnInit {

  selectedGasto: Gasto;
  feedback: any = {};

  get gastoList(): Gasto[] {
    return this.gastoService.gastoList;
  }

  constructor(private gastoService: GastoService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.gastoService.load();
  }

  select(selected: Gasto): void {
    this.selectedGasto = selected;
  }

  delete(gasto: Gasto): void {
    if (confirm('Deseja remover o gasto?')) {
      this.gastoService.delete(gasto).subscribe(() => {
          this.feedback = {type: 'success', message: 'Removido com sucesso!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erro ao remover.'};
        }
      );
    }
  }
}
