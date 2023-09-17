import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule, FormsModule //importamos formsmodule para usar ngmodel 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
