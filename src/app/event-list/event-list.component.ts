import { Component, computed, inject, signal } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { CATEGORIES } from '../event.model';
import { EventService } from '../event.service';

@Component({ selector: 'app-event-list', standalone: true, imports: [EventCardComponent], template: `
<div class="listing-page"><section class="page-intro"><p class="section-kicker">ASSOCIATION \u00c9TUDIANTE \u00b7 PROGRAMME 2026</p><h1>Les \u00e9v\u00e9nements du campus</h1><p>Ateliers, conf\u00e9rences, rencontres et activit\u00e9s sportives organis\u00e9s par la communaut\u00e9 \u00e9tudiante.</p></section>
<section class="events-section" id="catalog"><div class="section-heading"><div><h2>Prochains \u00e9v\u00e9nements</h2><p class="section-subtitle">Choisissez une activit\u00e9 et retrouvez toutes les informations pratiques.</p></div></div>
<div class="stats-row"><span>{{ service.eventCount() }} \u00e9v\u00e9nements</span><span>{{ service.favoriteCount() }} favoris</span><span>{{ service.freeEventCount() }} gratuits</span></div>
<div class="catalog-toolbar"><span class="filter-heading">Cat\u00e9gorie</span><div class="filter-list" aria-label="Filtrer par cat\u00e9gorie">@for(category of categories;track category){<button class="filter-button" type="button" [class.selected]="selectedCategory()===category" (click)="selectedCategory.set(category)">{{category}}</button>}</div></div>
<div class="events-grid">@for(event of filteredEvents();track event.id){<app-event-card [event]="event" [favorite]="service.favorites().has(event.id)" (favoriteToggle)="service.toggleFavorite($event)" (deleteEvent)="removeEvent($event)"></app-event-card>} @empty {<div class="empty-state"><h3>Aucun \u00e9v\u00e9nement disponible</h3><p>Il n\u2019y a pas d\u2019\u00e9v\u00e9nement dans cette cat\u00e9gorie.</p></div>}</div></section></div>` })
export class EventListComponent {
 readonly service=inject(EventService); readonly categories=CATEGORIES; readonly selectedCategory=signal('Tous');
 readonly filteredEvents=computed(()=>this.selectedCategory()==='Tous'?this.service.events():this.service.events().filter(e=>e.category===this.selectedCategory()));
 removeEvent(id:number):void {if(confirm('Supprimer cet \u00e9v\u00e9nement ?')) this.service.deleteEvent(id);}
}
