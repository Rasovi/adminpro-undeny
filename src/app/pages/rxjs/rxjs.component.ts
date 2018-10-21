import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;

  constructor() {

   this.subscriptor = this.obtenerObservable().subscribe(
      cont => console.log('Subs', cont),
      error => console.error('Error en el observable', error),
      () => console.log('El observer ha terminado')
    );
   }

  ngOnInit() {
  }

  ngOnDestroy(){
  this.subscriptor.unsubscribe();
  }

  obtenerObservable(): Observable<any>{

    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        }
        observer.next(salida); // Emitir el contador
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
      }, 1000);

    }).pipe(
       map( resp => {
        return resp.valor;
       }),
       filter( (valor, index) => {
        if(valor % 2 === 1) return true; else return false;
       })
    )
  }

}
