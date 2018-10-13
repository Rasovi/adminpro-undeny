import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustes: SettingsService) { }

  ngOnInit() {
    this._ajustes.cargarAjustes();
    this.cargarTema();
  }

  cambiarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this._ajustes.ajustes.tema = tema;
    this._ajustes.ajustes.temaUrl = url;
    this._ajustes.guardarAjustes();
    this.colocarCheck();
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for (let ref of selectores) {
      ref.classList.remove('working');
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
      }
    }
  }

  cargarTema() {
    this._document.getElementById('theme').setAttribute('href', this._ajustes.ajustes.temaUrl);
    this.colocarCheck();
  }
}
