import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import {
  debounce,
  distinctUntilChanged,
  filter,
  mapTo,
  pluck,
  shareReplay,
  switchMap,
  switchMapTo,
  tap,
} from 'rxjs/operators';

import { BastahService } from 'src/app/services/bastah/bastah.service';
import { KalamInterface } from 'src/models/bastah.interface';

@Component({
  selector: 'app-kalam',
  templateUrl: './kalam.page.html',
  styleUrls: ['./kalam.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KalamPage implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly bastah: BastahService
  ) {}
  kalam$: Observable<KalamInterface>;

  shouldSlide$ = new BehaviorSubject(false);
  subscription = new Subscription();
  @ViewChild(IonContent) ionContent: IonContent;

  ngOnInit() {
    this.kalam$ = this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap((id) => this.bastah.getKalamById(id)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  ngAfterViewInit(): void {
    if (/iPhone|Android/.test(navigator.userAgent)) {
      this.scrollSpy();
    }
  }

  getNumber(i: number) {
    // ? This is shown on every kalam type but should be shown only on marsiya
    // const nextNumber = i - 5 * (i / 6);
    // return String.fromCharCode(1777 + nextNumber);
  }

  scrollSpy() {
    this.ionContent.scrollEvents = true;
    const UP = 'UP';
    const DOWN = 'DOWN';
    type scrollEvent = CustomEvent<{ deltaY: number }>;
    const onScroll$ = this.ionContent.ionScrollStart.pipe(
      switchMapTo(this.ionContent.ionScroll),
      debounce(() => this.ionContent.ionScrollEnd)
    );
    const onScrollDown$ = onScroll$.pipe(
      filter((event: scrollEvent) => event.detail.deltaY >= 50),
      mapTo(DOWN)
    );

    const onScrollUp$ = onScroll$.pipe(
      filter((event: scrollEvent) => event.detail.deltaY < 0),
      mapTo(UP)
    );
    this.subscription.add(
      merge(onScrollUp$, onScrollDown$)
        .pipe(
          distinctUntilChanged(),
          tap((event) => this.shouldSlide$.next(event === DOWN))
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
