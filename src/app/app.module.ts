import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SelectedProtocolsComponent } from './selected-protocols/selected-protocols.component';
import { SelectedTimeComponent } from './selected-time/selected-time.component';
import { SummeryComponent } from './summery/summery.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    SelectedProtocolsComponent,
    SelectedTimeComponent,
    SummeryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
