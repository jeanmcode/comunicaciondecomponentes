import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  public titulo= 'Calculadora';

   recibirTotal: number=0;

   RecibirForm(total: number){
    
    this.recibirTotal=total;
      

   }


  }




