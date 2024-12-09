import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutDsigComponent } from './about-dsig/about-dsig.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },         // Default home page route
    { path: 'about-dsig', component: AboutDsigComponent},   // About Us page route
];

