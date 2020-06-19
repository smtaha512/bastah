import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { BastahService } from 'src/app/services/bastah/bastah.service';
import { MenuInterface } from 'src/models/bastah.interface';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.page.html',
  styleUrls: ['./sub-menu.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubMenuPage implements OnInit {
  section$: Observable<MenuInterface>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly bastah: BastahService
  ) {}

  ngOnInit() {
    this.section$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) => this.bastah.getSectionById(id))
    );
  }
}
