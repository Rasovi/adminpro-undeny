import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    // Notificar un intervalo que finalice a los 3 seg

    let promesa = new Promise(( resolve, reject) => {
    
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if(contador === 3){
          resolve('Todo OK');
          clearInterval(intervalo);
        }
      }, 1000);

    });

    promesa.then(
      (mensaje) => console.log('Ha terminado: ', mensaje)//,
      //() => console.log('Error')
    ).catch(
      error => console.error('Error en la promesa',error)
    );

  }

  ngOnInit() {
  }

}
