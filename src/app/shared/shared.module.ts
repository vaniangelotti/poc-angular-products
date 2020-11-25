import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';

// Este arquivo é representado pelo shared modules, onde criamos um modulo para conter todas as configurações específicas do modulo star que será
// compartilhado com todos os módulos da aplicação, incluimos ele dentro do import do product.module assim como os módulos padrões do angular.
@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
