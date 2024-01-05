import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PAGE_ALIAS } from '../../constants/constants';
import { CommonModule } from '@angular/common';
import { Observable, fromEvent, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'folio-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public pageAlias;
  readonly PAGE_ALIAS = PAGE_ALIAS;

  public osTheme$: Observable<any> = new Observable();
  public darkMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.pageAlias = this.activatedRoute.snapshot.data['pageAlias'];

    this.osTheme$ = fromEvent(
      window.matchMedia('(prefers-color-scheme: dark)'),
      'change').pipe(
        startWith(window.matchMedia('(prefers-color-scheme: dark)')),
        map((event: any) => event.matches),
        tap((e) => {
          this.darkMode = e;
        })
      );

    this.osTheme$.subscribe(e => {
      document.querySelector('html')?.setAttribute('data-theme', e ? 'dark' : '');
    });
  }

  toggleTheme() {
    const isDark = document.querySelector('html')?.getAttribute('data-theme');
    document.querySelector('html')?.setAttribute('data-theme', !isDark ? 'dark' : '');
    this.darkMode = !isDark;
  }

}
