import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <main class="app-main"><router-outlet></router-outlet></main>
    <footer class="site-footer"><span>EventHub · Association étudiante</span><span>Programme des activités du campus</span></footer>
  `
})
export class AppComponent {}
