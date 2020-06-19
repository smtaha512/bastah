import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { BastahService } from 'src/app/services/bastah/bastah.service';
import { MenuInterface } from 'src/models/bastah.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  sections$: Observable<Pick<MenuInterface, 'id' | 'sectionName'>[]>;

  constructor(private readonly bastah: BastahService) {}

  ngOnInit() {
    this.sections$ = this.bastah
      .getSections()
      .pipe(shareReplay({ refCount: true, bufferSize: 1 }));
  }
}
