import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule,MatMenuModule,MatToolbarModule,MatInputModule,MatCheckboxModule,MatIconModule,MatCardModule, MatListModule, MatGridListModule,MatDialogModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    VegeRComponent,
    CmtComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
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
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [VegesService,
              PromotionService,
              LeaderService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
