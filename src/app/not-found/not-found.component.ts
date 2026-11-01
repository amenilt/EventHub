import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="inner-page not-found-page"><div class="empty-state"><span class="not-found-code">404</span><span class="empty-icon">✳</span><h1>Oups, vous êtes hors campus !</h1><p>Cette page n’existe pas. Mais les événements, eux, sont tout près.</p><a class="hero-button" routerLink="/events">Retourner aux événements <span>→</span></a></div></div>
  `
})
export class NotFoundComponent {}
