// Modules
import { AppRoutingModule } from './routing.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Additional libraries
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { CorasalComponent } from './corasal/corasal.component';
import { TilesComponent } from './tiles/tiles.component';
import { HowWeAssistComponent } from './how-we-assist/how-we-assist.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

@NgModule({
  declarations: [
    AppComponent,
    CorasalComponent,
    TilesComponent,
    HowWeAssistComponent,
    WhatWeDoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
