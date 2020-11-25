import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';

// Este arquivo é representado pelo feature modules, onde criamos um modulo para conter todas as configurações específicas da nossa aplicação e no app.module
// incluimos ele dentro do import para importar esse novo modulo, como os módulos padrões do angular.
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    ProductRoutingModule, //routing module
    SharedModule //shared module
  ],
  exports: [RouterModule] 
})
export class ProductModule { }
