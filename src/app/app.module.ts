import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { FastOnchangeComponent } from './components/fast-onchange/fast-onchange.component';
import { BoxComponent } from './components/fast-onchange/box.component';
import { AnimationsComponent } from './components/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FastOnchangeComponent,
    BoxComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    DeferLoadModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
