import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: `
    <input
      type="text"
      placeholder="Titles, people, genres"
      (input)="onSearch($event)"
    >
  `
})
export class SearchBarComponent {
  private router = inject(Router);
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(term => {
      if (term.length > 2) {
        this.router.navigate(['/search'], { queryParams: { q: term } });
      }
    });
  }

  onSearch(event: any) {
    this.searchSubject.next(event.target.value);
  }
}
