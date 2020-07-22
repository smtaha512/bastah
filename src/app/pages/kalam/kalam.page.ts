import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';

import { BastahService } from 'src/app/services/bastah/bastah.service';
import { KalamInterface } from 'src/models/bastah.interface';

@Component({
  selector: 'app-kalam',
  templateUrl: './kalam.page.html',
  styleUrls: ['./kalam.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KalamPage implements OnInit {
  kalam$: Observable<KalamInterface>;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly bastah: BastahService
  ) {}

  ngOnInit() {
    this.kalam$ = this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap((id) => this.bastah.getKalamById(id)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  getNumber(i: number) {
    // ? This is shown on every kalam type but should be shown only on marsiya
    // const nextNumber = i - 5 * (i / 6);
    // return String.fromCharCode(1777 + nextNumber);
  }
}
