import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PropertygridComponent } from './propertygrid/propertygrid.component';
import { RefreshbuttonComponent } from './refreshbutton/refreshbutton.component';
import {ButtonModule} from "primeng/primeng";
import {DataTableModule,SharedModule} from 'primeng/primeng';

import {RefreshService} from "./refresh.service";
import {PropertyService} from "./property.service";
import {TooltipModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabViewModule} from 'primeng/primeng';
import { PropertytabsComponent } from './propertytabs/propertytabs.component';
import { CurrencydisplayComponent } from './currencydisplay/currencydisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertygridComponent,
    RefreshbuttonComponent,
    PropertytabsComponent,
    CurrencydisplayComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    TooltipModule,
    DropdownModule,
    BrowserAnimationsModule,
    TabViewModule
  ],

  providers: [RefreshService, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
