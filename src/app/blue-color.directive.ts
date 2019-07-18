import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color ="blue";
   }
   @HostListener('document:click',['$event']) elementClicked(elem) {
console.log('document clicked',elem);
   }
  @HostListener('click') clicked(){
    alert("clicked on blue directive. It works!")
  }
  @HostListener('mouseenter') mouseenter(){
    console.log("mouse entered on blue directive. It works!")
  }
  @HostListener('mouseleave') mouseleave(){
    console.log("mouse leave on blue directive. It works!")
  }
}
