import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight-text]'
})
export class HighlightTextDirective {


  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "green";
    el.nativeElement.style.fontSize = "2rem";
  }

}
