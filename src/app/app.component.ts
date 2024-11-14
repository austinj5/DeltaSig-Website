import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Delta Sigma Phi';
  chapter = 'Omega';
}
