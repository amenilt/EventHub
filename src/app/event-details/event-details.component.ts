import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink],
  template: `
    <div class="inner-page detail-page">@if (event(); as selectedEvent) {<a class="back-link" routerLink="/events">← Retour à tous les événements</a><div class="detail-layout"><div class="detail-image-wrap"><img class="detail-image" [src]="selectedEvent.imageUrl" [alt]="'Illustration : ' + selectedEvent.title"><span class="detail-category">{{ selectedEvent.category }}</span></div><article class="detail-copy"><span class="section-kicker">À NE PAS MANQUER</span><h1>{{ selectedEvent.title }}</h1><p class="detail-description">{{ selectedEvent.description }}</p><div class="detail-info"><div><span>QUAND</span><strong>{{ selectedEvent.date | date:'EEEE d MMMM y · HH:mm':'':'fr-FR' }}</strong></div><div><span>OÙ</span><strong>{{ selectedEvent.place }}</strong></div><div><span>PARTICIPATION</span><strong>{{ selectedEvent.price === 0 ? 'C’est gratuit !' : (selectedEvent.price | currency:'EUR':'symbol':'1.0-0':'fr-FR') }}</strong></div></div><a class="hero-button" routerLink="/events#catalog">Explorer les événements <span>→</span></a></article></div>} @else {<div class="empty-state detail-missing"><span class="empty-icon">✳</span><h1>Événement introuvable</h1><p>Cette activité n’est pas dans notre programme — elle a peut-être déjà eu lieu !</p><a class="hero-button" routerLink="/events">Retrouver les événements <span>→</span></a></div>}</div>
  `
})
export class EventDetailsComponent {
  private readonly service = inject(EventService);
  readonly id = input<string>();
  readonly event = computed(() => this.service.getEventById(Number(this.id())));
}
