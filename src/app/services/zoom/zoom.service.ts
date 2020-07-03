import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
  OnDestroy,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, first, scan, shareReplay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ZoomService implements OnDestroy {
  private readonly renderer: Renderer2;
  private readonly subscription = new Subscription();
  // timesZoom define how much we have zoomed. Example `1` times, `2` times etc
  private readonly timesZoom$$ = new BehaviorSubject(1);
  readonly timesZoom$ = this.timesZoom$$
    .asObservable()
    .pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly rendererFactory: RendererFactory2
  ) {
    // Since we can not inject renderer2 in service we have to create it
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

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
