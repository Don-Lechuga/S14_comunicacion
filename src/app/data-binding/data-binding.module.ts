import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayComponent } from './two-way/two-way.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TwoWayComponent,
    InterpolacionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TwoWayComponent,
    InterpolacionComponent,
  ],
})
export class DataBindingModule { }
