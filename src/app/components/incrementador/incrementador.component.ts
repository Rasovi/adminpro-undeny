import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  @Input () progreso: number = 50;
  // tslint:disable-next-line:no-inferrable-types
  @Input ('nombre') leyenda: string = 'Leyenda';

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
  }

  onChange( valor: number ) {
    if(+valor >= 100) {
      this.progreso = 100;
    } else if (+valor <= 0) {
      this.progreso = 0;

    }else {
      this.progreso = +valor;
    }
    this.txtProgress.nativeElement.value = this.progreso;
  }

  cambiarValor(valor) {
    if (+this.progreso + +valor >= 100) {
      this.progreso = 100;
      return;
    }
    if (+this.progreso + +valor <= 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = +this.progreso + +valor;
  }
}
