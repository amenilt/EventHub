import { Injectable, computed, signal } from '@angular/core';
import { EVENTS, EventItem } from './event.model';

export type NewEvent = Omit<EventItem, 'id'>;

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly _events = signal<EventItem[]>([...EVENTS]);
  private readonly _favorites = signal<Set<number>>(new Set());
  readonly events = this._events.asReadonly();
  readonly favorites = this._favorites.asReadonly();
  readonly eventCount = computed(() => this._events().length);
  readonly favoriteCount = computed(() => this._favorites().size);
  readonly freeEventCount = computed(() => this._events().filter(event => event.price === 0).length);
  getEventById(id: number): EventItem | undefined { return this._events().find(event => event.id === id); }
  addEvent(event: NewEvent): EventItem {
    const id = Math.max(0, ...this._events().map(item => item.id)) + 1;
    const created = { ...event, id };
    this._events.update(items => [...items, created]);
    return created;
  }
  deleteEvent(id: number): void {
    this._events.update(items => items.filter(item => item.id !== id));
    this._favorites.update(items => { const next = new Set(items); next.delete(id); return next; });
  }
  toggleFavorite(id: number): void {
    this._favorites.update(items => { const next = new Set(items); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }
}
