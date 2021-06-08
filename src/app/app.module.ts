import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { NgxEditorModule } from 'ngx-editor';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
