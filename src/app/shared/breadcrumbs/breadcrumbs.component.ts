import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe( data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo); // Para que se vea en el titulo de la pestaña
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this.meta.updateTag( metaTag );
    });
   }

  ngOnInit() {
  }

  getDataRoute(){
    return this.router.events.pipe(
      filter( evento => {
        return evento instanceof ActivationEnd;
      }),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),  // Asi no hace falta poner el return
      map( (evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
