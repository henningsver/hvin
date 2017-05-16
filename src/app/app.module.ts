import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineService }          from './wines/wine.service';
import { WineDetailsComponent } from './wines/wine-details/wine-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [ WineService ],
  bootstrap: [AppComponent,
  WineListComponent]
})
export class AppModule { }
