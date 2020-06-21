import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BastahService } from 'src/app/services/bastah/bastah.service';
import { KalamInterface } from 'src/models/bastah.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ziarat',
  templateUrl: './ziarat.page.html',
  styleUrls: ['./ziarat.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZiaratPage implements OnInit {
  ziarat$: Observable<KalamInterface>;
  constructor(private readonly bastahService: BastahService) {}

  ngOnInit() {
    this.ziarat$ = this.bastahService.getKalamById('mukhtasir-ziarat');
  }
}
