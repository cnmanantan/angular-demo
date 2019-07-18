import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-heading-wrapper]'
})
export class HeadingWrapperDirective {

  constructor(private el: ElementRef) { 
    let h1 = el.nativeElement.children.item(0);
    let p = el.nativeElement.children.item(1);
    setTimeout(() => {
      h1 = el.nativeElement.children.item(0);
      p = el.nativeElement.children.item(1);

      h1.style.color = "#212121";
      h1.style.textTransform = "uppercase";
      h1.style.fontSize = "3.5rem";
      p.style.color = "#424242";
      p.style.fontStyle = "italic";
      p.style.fontSize = "1.5rem";
    }, 300);
  }

}
