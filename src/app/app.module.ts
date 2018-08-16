import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaxDirective } from '../shared/maxDirective';
import { MinDirective } from '../shared/minDIrective'

@NgModule({
  declarations: [
    AppComponent,
    MaxDirective,
    MinDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
