import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './pages/landing.component';
import { TableComponent } from './component/table/table.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';

// Material UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
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
    PageWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService,
  ]
})
export class DashboardModule { }
