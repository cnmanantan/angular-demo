import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageModule } from '@landing/landing-page.module';
import { DashboardModule } from '@dashboard/dashboard.module';
import { DirectivesPageModule } from '@directives/directives-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    DashboardModule,
    DirectivesPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
