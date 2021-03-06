import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-heading-text]'
})
export class HeadingTextDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = "3rem";
    el.nativeElement.style.fontWeight = "700";
    el.nativeElement.style.textTransform = "uppercase";
    el.nativeElement.style.margin = "0px";
    el.nativeElement.className = "heading heading-text";
  }

}
