import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },         // Default home page route
    { path: 'about', component: AboutComponent },   // About Us page route
];

