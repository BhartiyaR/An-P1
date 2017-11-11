import { Routes } from '@angular/router';

import { VegeRComponent } from '../vege-r/vege-r.component';
import { CmtComponent } from '../cmt/cmt.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'vegerates',     component: VegeRComponent },
  { path: 'cmt/:id',     component: CmtComponent },
  { path: 'contactus',  component: ContactComponent },
  { path: 'aboutus',  component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];