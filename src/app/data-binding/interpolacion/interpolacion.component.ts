import { Component, ElementRef } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  titulo = 'Data Binding Interpolation'

  vision:boolean = false;
  mensaje:string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur soluta iure ullam, cum saepe cumque dolore laborum. Quos ullam sit optio ea. Non temporibus odit ab error, eum adipisci!"


  estado(){
    if (this.vision){
      this.vision = false
    }else{
      this.vision = true
    }
  }


}
