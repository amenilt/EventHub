import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, JsonPipe],
  template: `
    <div class="inner-page form-page">
      <a class="back-link" routerLink="/events">\u2190 Retour aux \u00e9v\u00e9nements</a>
      <section class="form-panel">
        <span class="section-kicker">NOUVELLE ACTIVIT\u00c9</span>
        <h1>Ajouter un \u00e9v\u00e9nement</h1>
        <form [formGroup]="eventForm" (ngSubmit)="addEvent()" novalidate>
          <label for="title">Titre</label>
          <input id="title" type="text" formControlName="title" maxlength="50" autocomplete="off">
          @if (showError('title')) {
            <small>Le titre est obligatoire et doit contenir entre 5 et 50 caract\u00e8res.</small>
          }

          <label for="category">Cat\u00e9gorie</label>
          <select id="category" formControlName="category">
            <option value="">Choisir une cat\u00e9gorie</option>
            <option value="Atelier">Atelier</option>
            <option value="Conf\u00e9rence">Conf\u00e9rence</option>
            <option value="Sport">Sport</option>
          </select>
          @if (showError('category')) { <small>Choisissez Atelier, Conf\u00e9rence ou Sport.</small> }

          <label for="date">Date</label>
          <input id="date" type="date" formControlName="date">
          @if (showError('date')) { <small>La date est obligatoire.</small> }

          <label for="place">Lieu</label>
          <input id="place" type="text" formControlName="place">
          @if (showError('place')) { <small>Le lieu doit contenir au moins 3 caract\u00e8res.</small> }

          <label for="price">Prix (\u20ac)</label>
          <input id="price" type="number" min="0" step="0.01" formControlName="price">
          @if (showError('price')) { <small>Le prix doit \u00eatre sup\u00e9rieur ou \u00e9gal \u00e0 0.</small> }

          <label for="imageUrl">URL de l\u2019image (facultatif)</label>
          <input id="imageUrl" type="url" formControlName="imageUrl">

          <label for="description">Description</label>
          <textarea id="description" rows="5" formControlName="description"></textarea>
          @if (showError('description')) { <small>La description doit contenir au moins 20 caract\u00e8res.</small> }

          <button class="hero-button" type="submit" [disabled]="eventForm.invalid">Cr\u00e9er l\u2019\u00e9v\u00e9nement</button>
        </form>
        <aside class="form-debug" aria-live="polite">
          <strong>Valeurs du formulaire ({{ formStatus() }})</strong>
          <pre>{{ formValue() | json }}</pre>
        </aside>
      </section>
    </div>
  `
})
export class EventFormComponent {
  private readonly service = inject(EventService);
  private readonly router = inject(Router);

  readonly eventForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)] }),
    category: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^(Atelier|Conf\u00e9rence|Sport)$/)] }),
    date: new FormControl('', { nonNullable: true, validators: Validators.required }),
    place: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    price: new FormControl<number | null>(0, { validators: [Validators.required, Validators.min(0)] }),
    imageUrl: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(20)] })
  });

  readonly formValue = toSignal(this.eventForm.valueChanges, { initialValue: this.eventForm.getRawValue() });
  readonly formStatus = toSignal(this.eventForm.statusChanges, { initialValue: this.eventForm.status });

  showError(name: string): boolean {
    const control = this.eventForm.get(name);
    return !!control?.invalid && control.touched;
  }

  addEvent(): void {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const value = this.eventForm.getRawValue();
    this.service.addEvent({
      title: value.title.trim(),
      category: value.category,
      date: new Date(`${value.date}T12:00:00`).toISOString(),
      place: value.place.trim(),
      price: value.price!,
      imageUrl: value.imageUrl.trim() || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=960&q=85',
      description: value.description.trim()
    });
    this.eventForm.reset({ title: '', category: '', date: '', place: '', price: 0, imageUrl: '', description: '' });
    void this.router.navigate(['/events']);
  }
}
