import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RateItModule } from 'rate-it';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RateItModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
