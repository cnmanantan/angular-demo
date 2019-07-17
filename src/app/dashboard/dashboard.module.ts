import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './pages/landing.component';
import { TableComponent } from './component/table/table.component';
import { SharedModule } from '@shared/shared.module';

// Material UI
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { ApiService } from '@services/api.service';

const routes: Routes = [
  { path : 'dashboard', component :  LandingComponent },
];

@NgModule({
  declarations: [
    LandingComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService,
  ]
})
export class DashboardModule { }
