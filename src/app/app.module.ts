import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpadeComponent } from './spade/spade.component';
import { DiamondComponent } from './diamond/diamond.component';
import { CloverComponent } from './clover/clover.component';
import { HeartComponent } from './heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    SpadeComponent,
    DiamondComponent,
    CloverComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
