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
      p.style.color = "#424242";
      p.style.fontStyle = "italic";
    }, 300);
  }

}
