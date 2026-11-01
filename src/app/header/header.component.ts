import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/events" aria-label="EventHub, accueil">
        <span class="brand-mark">E</span>
        <span class="brand-copy"><span class="brand-name">EventHub</span><span class="brand-caption">ÉVÉNEMENTS ÉTUDIANTS</span></span>
      </a>
      <nav class="navigation" aria-label="Navigation principale">
        <a routerLink="/events" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }">Événements</a>
        <a routerLink="/events/add" routerLinkActive="active">Ajouter un ?v?nement</a>
        <a routerLink="/about" routerLinkActive="active">À propos</a>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
