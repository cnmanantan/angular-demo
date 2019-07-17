import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightTextDirective } from './highlight-text/highlight-text.directive';
import { HeadingTextDirective } from './heading-text/heading-text.directive';

@NgModule({
  declarations: [
    HighlightTextDirective,
    HeadingTextDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightTextDirective,
    HeadingTextDirective,
  ]
})
export class DirectiveModule { }
