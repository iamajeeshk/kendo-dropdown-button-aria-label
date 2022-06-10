import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { KendoDropdownbuttonExtnDirective } from './kendo-dropdownbutton-extn';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, KendoDropdownbuttonExtnDirective],
  imports: [BrowserModule, BrowserAnimationsModule, ButtonsModule],
})
export class AppModule {}
