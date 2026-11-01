import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="inner-page about-page"><section class="about-hero"><span class="section-kicker">À PROPOS</span><h1>Les activités de<br>l’association étudiante</h1><p>EventHub présente le programme des activités organisées sur le campus. Cette application permet de consulter les informations pratiques, de filtrer les événements par catégorie et de garder une sélection de favoris.</p><a class="hero-button" routerLink="/events">Consulter les événements <span>→</span></a></section><section class="about-values"><article><h2>Un programme varié</h2><p>Ateliers, conférences, rencontres et activités sportives sont proposés aux étudiants.</p></article><article><h2>Des informations accessibles</h2><p>Chaque événement indique sa date, son lieu, son tarif et une description.</p></article><article><h2>Un projet étudiant</h2><p>Les données du programme sont définies dans l’application. Aucune inscription ou authentification n’est nécessaire.</p></article></section></div>
  `
})
export class AboutComponent {}
