import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-gasto-edit',
  templateUrl: './gasto-edit.component.html'
})
export class GastoEditComponent implements OnInit {

  id: string;
  gasto: Gasto;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gastoService: GastoService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Gasto()); }
          return this.gastoService.findById(id);
        })
      )
      .subscribe(gasto => {
          this.gasto = gasto;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.gastoService.save(this.gasto).subscribe(
      gasto => {
        this.gasto = gasto;
        this.feedback = {type: 'success', message: 'Gasto salvo com sucesso!'};
        setTimeout(() => {
          this.router.navigate(['/gastos']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Erro ao salvar'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/gastos']);
  }
}
