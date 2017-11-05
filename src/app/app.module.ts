import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatCardModule, MatListModule, MatGridListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import { VegeRComponent } from './vege-r/vege-r.component';
import { CmtComponent } from './cmt/cmt.component';


@NgModule({
  declarations: [
    AppComponent,
    VegeRComponent,
    CmtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
