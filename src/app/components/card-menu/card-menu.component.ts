import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { BastahService } from 'src/app/services/bastah/bastah.service';
import { MenuInterface } from 'src/models/bastah.interface';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardMenuComponent implements OnInit {
  sections$: Observable<Pick<MenuInterface, 'id' | 'sectionName'>[]>;

  constructor(private readonly bastah: BastahService) {}

  ngOnInit() {
    this.sections$ = this.bastah
      .getSections()
      .pipe(shareReplay({ refCount: true, bufferSize: 1 }));
  }
}
