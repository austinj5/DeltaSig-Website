import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },         // Default home page route
    { path: 'about', component: AboutComponent },   // About Us page route
];

