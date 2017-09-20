import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PropertygridComponent } from './propertygrid/propertygrid.component';
import { RefreshbuttonComponent } from './refreshbutton/refreshbutton.component';
import {ButtonModule} from "primeng/primeng";
import {RefreshService} from "./refresh.service";

@NgModule({
  declarations: [
    AppComponent,
    PropertygridComponent,
    RefreshbuttonComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpModule
  ],
  providers: [RefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
