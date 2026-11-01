import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'events' },
  {
    path: 'events',
    loadComponent: () => import('./event-list/event-list.component').then((module) => module.EventListComponent),
    title: 'Événements · EventHub'
  },
  { path: 'events/add', loadComponent: () => import('./event-form/event-form.component').then(m => m.EventFormComponent), title: 'Ajouter un ?v?nement ? EventHub' },
  {
    path: 'events/:id',
    loadComponent: () => import('./event-details/event-details.component').then((module) => module.EventDetailsComponent),
    title: 'Détail de l’événement · EventHub'
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((module) => module.AboutComponent),
    title: 'À propos · EventHub'
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component').then((module) => module.NotFoundComponent),
    title: 'Page introuvable · EventHub'
  },
  { path: '**', redirectTo: 'not-found' }
];
