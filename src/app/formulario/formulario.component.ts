import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  public num1: number;
  public num2:number;

  //preparamos la variable que se enviara
  @Output() total= new EventEmitter<number>();

    sumar(){


      let total1= this.num1+this.num2;
     //enviamos la variable
    this.total.emit(total1);
    

    }


}
