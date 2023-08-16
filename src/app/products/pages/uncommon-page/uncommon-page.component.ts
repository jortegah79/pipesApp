import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = "Fernando";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = "Melisa";
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': ' no tenemos ningún cliente esperando.',
    '=1': ' tenemos 1 cliente esperando.',
    '=2': ' tenemos 2 clientes esperando.',
    'other': ' tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.shift();
  }

  //keyValuePipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe

  public myObservableTImer = interval(1000).pipe(
    tap(value => console.log('tap:', value)
    )
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('')
    }, 3500);
  });

}
