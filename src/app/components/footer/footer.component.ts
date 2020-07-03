import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ZoomService } from 'src/app/services/zoom/zoom.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  readonly timesZoom$ = this.zoomService.timesZoom$;

  constructor(
    private readonly modalController: ModalController,
    private readonly zoomService: ZoomService
  ) {}

  ngOnInit() {}

  zoom(inOut: number) {
    this.zoomService.zoom(inOut);
  }

  async openSearch() {
    const modal = await this.modalController.create({
      component: SearchComponent,
    });
    modal.present();
  }
}
