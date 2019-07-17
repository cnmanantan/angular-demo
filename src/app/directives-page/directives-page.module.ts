import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
import { SharedModule } from '@shared/shared.module';
import { DirectiveModule } from '../directive/directive.module';

const routes: Routes = [
  { path : 'directives', component :  PageComponent },
];

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    DirectiveModule
  ],
  exports:[
    RouterModule
  ]
})
export class DirectivesPageModule { }
