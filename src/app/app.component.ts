import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  shouldDisableMenu$: Observable<boolean> = of(false);

  constructor(
    private readonly router: Router,
    private readonly menuController: MenuController
  ) {}

  ngOnInit(): void {
    this.toggleSideMenuStateOnRouteChange();
    this.closeMenuOnRouteChange();
  }

  private toggleSideMenuStateOnRouteChange() {
    this.shouldDisableMenu$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.urlAfterRedirects),
      map((url) => url === '/home')
    );
  }

  private closeMenuOnRouteChange() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        tap(() => this.menuController.close())
      )
      .subscribe();
  }
}
