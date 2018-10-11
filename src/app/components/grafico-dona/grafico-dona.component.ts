import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('titulo') public titulo: string = '';
  @Input('tipo') public tipo: string = 'doughnut';
  @Input('etiquetas') public etiquetas: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('datos') public datos: number[] = [350, 450, 100];


  constructor() { }

  ngOnInit() {

  }

}
