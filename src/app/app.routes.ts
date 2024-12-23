import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutDsigComponent } from './about-dsig/about-dsig.component';
import { AboutOmegaComponent } from './about-omega/about-omega.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { NewsComponent } from './news/news.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },                     // Default Home page route
    { path: 'about-dsig', component: AboutDsigComponent},       // About Our Fraternity page route
    { path: 'about-omega', component: AboutOmegaComponent},     // About Omega Chapter page route
    { path: 'recruitment', component: RecruitmentComponent},    // Recruitment page route
    { path: 'news', component: NewsComponent}                   // News page route
];

