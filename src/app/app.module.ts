import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  WineListComponent]
})
export class AppModule { }
