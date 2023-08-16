import { Component } from '@angular/core';


//CONFIGURACION DEL LOCALE DE LA APP
import localeEsHn from '@angular/common/locales/es-HN';
import localeFrCa from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEsHn);
registerLocaleData(localeFrCa);

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower:string='el programador ninja';
  public nameUpper:string='EL PROGRAMADOR NINJA';
  public fullName:string='eL PROgramAdOr niNjA';

  public customDate:Date=new Date();

}
