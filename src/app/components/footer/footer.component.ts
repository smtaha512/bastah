import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, first, scan, shareReplay, tap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit, OnDestroy {
  // timesZoom define how much we have zoomed. Example `1` times, `2` times etc
  private readonly timesZoom$$ = new BehaviorSubject(1);
  readonly timesZoom$ = this.timesZoom$$
    .asObservable()
    .pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  private readonly subscription = new Subscription();
  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly modalController: ModalController
  ) {}

  ngOnInit() {}

  zoom(inOut: number) {
    this.subscription.unsubscribe();
    this.subscription.add(
      this.timesZoom$
        .pipe(
          first(),
          filter((timesZoom) => this.canZoom(timesZoom, inOut)),
          scan((acc, value) => acc + value, inOut),
          tap((timesZoom) => this.timesZoom$$.next(timesZoom)),
          tap((timesZoom) => this.updateFontSize(16 + timesZoom * 2 - 2))
        )
        .subscribe()
    );
  }

  async openSearch() {
    const modal = await this.modalController.create({
      component: SearchComponent,
    });
    modal.present();
  }

  private canZoom(timesZoom: number, inOutFactor: number) {
    return (
      // can zoom in
      (timesZoom < 5 && inOutFactor === 1) ||
      // can zoom out
      (timesZoom > 1 && inOutFactor === -1)
    );
  }

  private updateFontSize(fontSize: number) {
    this.renderer.setAttribute(
      this.document.body.parentElement,
      'style',
      `--root-font-size: ${fontSize}px`
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
