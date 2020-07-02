import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BastahService } from 'src/app/services/bastah/bastah.service';
import { MenuInterface } from 'src/models/bastah.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  menus$: Observable<MenuInterface[]>;
  private readonly search$$ = new BehaviorSubject('');
  readonly search$ = this.search$$.asObservable();

  constructor(
    private readonly bastah: BastahService,
    private readonly modalController: ModalController,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.menus$ = this.bastah.getMenus().pipe(
      map((menu) =>
        menu.filter((item) => item.id !== 'ziarat' && item.id !== 'kisa')
      ),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  onSearchChange(event: CustomEvent<Record<'value', string>>) {
    this.search$$.next(event.detail.value);
  }

  trackBy(idx: number, item: { name: string }) {
    return item?.name ?? idx;
  }

  openKalam(id: string) {
    this.closeModal();
    this.router.navigate(['/kalam', id]);
  }

  closeModal() {
    this.modalController.getTop().then((modal) => modal.dismiss());
  }
}
