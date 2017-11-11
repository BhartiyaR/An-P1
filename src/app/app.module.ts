import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatCardModule, MatListModule, MatGridListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import { VegeRComponent } from './vege-r/vege-r.component';
import { CmtComponent } from './cmt/cmt.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {VegesService} from './services/veges.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service'

import {AppRoutingModule} from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    VegeRComponent,
    CmtComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
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
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [VegesService,
              PromotionService,
              LeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
