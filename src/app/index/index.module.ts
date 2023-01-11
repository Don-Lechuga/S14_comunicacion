import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DataBindingModule } from '../data-binding/data-binding.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    DataBindingModule
  ],
  exports: [
    IndexComponent
  ],
})
export class IndexModule { }
