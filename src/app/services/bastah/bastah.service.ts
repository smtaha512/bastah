import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, pluck, switchMap, tap } from 'rxjs/operators';

import {
  BastahInterface,
  KalamInterface,
  MenuInterface,
} from 'src/models/bastah.interface';

@Injectable({ providedIn: 'root' })
export class BastahService {
  private readonly bastah: BehaviorSubject<
    BastahInterface
  > = new BehaviorSubject(null);
  constructor(private readonly http: HttpClient) {}

  private getBastahFromJSON() {
    return this.http
      .get<BastahInterface>('/assets/bastah.json')
      .pipe(tap((bastah) => this.bastah.next(bastah)));
  }

  getBastah(): Observable<BastahInterface> {
    return this.bastah.pipe(
      switchMap((bastah) => (!bastah ? this.getBastahFromJSON() : of(bastah)))
    );
  }

  getSections(): Observable<Pick<MenuInterface, 'id' | 'sectionName'>[]> {
    return this.getBastah().pipe(
      pluck('menu'),
      map((menu) =>
        menu.map((section) => ({
          sectionName: section.sectionName,
          id: section.id,
        }))
      )
    );
  }

  getSectionById(id: string): Observable<MenuInterface> {
    return this.getBastah().pipe(
      pluck('menu'),
      map((menu) => menu.find((section) => section.id === id))
    );
  }

  getKalamById(id: string): Observable<KalamInterface> {
    return this.getBastah().pipe(
      pluck('menu'),
      map((menu) => menu.map((section) => section.kalams)),
      map((kalams) => ([] as KalamInterface[]).concat(...kalams)),
      map((kalams) => kalams.find((kalam) => kalam.id === id))
    );
  }
}
