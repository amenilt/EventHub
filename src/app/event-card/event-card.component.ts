import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventItem } from '../event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, RouterLink],
  template: `
    <article class="event-card">
      <a class="card-image-link" [routerLink]="['/events', event().id]" [attr.aria-label]="'Découvrir ' + event().title">
        <div class="card-image-wrap"><img class="card-image" [src]="event().imageUrl" [alt]="'Illustration : ' + event().title" [loading]="event().id > 3 ? 'lazy' : 'eager'" /><span class="category-pill">{{ event().category | uppercase }}</span></div>
      </a>
      <div class="card-content">
        <div class="card-date">{{ event().date | date:'d MMMM y · HH:mm':'':'fr-FR' }}</div>
        <a class="card-title-link" [routerLink]="['/events', event().id]"><h3>{{ event().title }}</h3></a>
        <p class="card-place">{{ event().place }}</p>
        <div class="card-bottom"><span class="card-price">{{ event().price === 0 ? 'Gratuit' : (event().price | currency:'EUR':'symbol':'1.0-0':'fr-FR') }}</span><button class="favorite-button" type="button" [class.is-favorite]="isFavorite()" [attr.aria-pressed]="isFavorite()" [attr.aria-label]="isFavorite() ? 'Retirer des favoris' : 'Ajouter aux favoris'" (click)="favoriteToggle.emit(event().id)">{{ isFavorite() ? 'Retirer des favoris' : 'Ajouter aux favoris' }}</button><button class="favorite-button" type="button" (click)="deleteEvent.emit(event().id)">Supprimer</button></div>
        <a class="card-detail-link" [routerLink]="['/events', event().id]">Voir les détails <span>→</span></a>
      </div>
    </article>
  `
})
export class EventCardComponent {
  readonly event = input.required<EventItem>();
  readonly favorite = input(false);
  readonly favoriteToggle = output<number>();
  readonly deleteEvent = output<number>();
  readonly isFavorite = computed(() => this.favorite());
}
