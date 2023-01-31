import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DataBindingModule } from '../data-binding/data-binding.module';
import { ComunicacionModule } from '../comunicacion/comunicacion.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    DataBindingModule,
    ComunicacionModule
  ],
  exports: [
    IndexComponent
  ],
})
export class IndexModule { }
