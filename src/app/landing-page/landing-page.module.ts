import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Material UI Component
import {MatButtonModule} from '@angular/material/button';

// Components
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path : '', component :  PageComponent }
];

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  exports: [
    PageComponent,
    RouterModule
  ]
})
export class LandingPageModule { }
