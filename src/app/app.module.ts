import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiLineComponent } from './multiline.component';
import { BarChartComponent } from './barchart.component';

@NgModule({
  declarations: [
    AppComponent,MultiLineComponent, BarChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
