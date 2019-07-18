import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightTextDirective } from './highlight-text/highlight-text.directive';
import { HeadingTextDirective } from './heading-text/heading-text.directive';
import { HeadingWrapperDirective } from './heading-wrapper/heading-wrapper.directive';

@NgModule({
  declarations: [
    HighlightTextDirective,
    HeadingTextDirective,
    HeadingWrapperDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightTextDirective,
    HeadingTextDirective,
    HeadingWrapperDirective,
  ]
})
export class DirectiveModule { }
