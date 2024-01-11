import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SubscriptionHandler } from '../../utils/sub-handler/subscription-handler';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  menuOpen = signal(false);
  tabOpen = signal(false);
  faBars = signal(faBars);

  sub = new SubscriptionHandler();

  ngOnInit(): void {
    this.sub.add = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => this.menuOpen.set(false));
  }

  ngOnDestroy(): void {
    this.sub.clear();
  }
}
