import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
    'table,th,td,tr{ text-align:center}'
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy?:'name'|'canFly'|'color';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },{
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    }]
   colors:string[]=['red','black','blue','green'];
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
changeOrder(value:keyof Hero){
this.sortBy=value;
}
insertColor(value:Color):string{

  return `background-color:${this.colors[value]}`
}

}
