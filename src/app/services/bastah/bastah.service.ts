import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import { BastahInterface, MenuInterface } from 'src/models/bastah.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BastahService {
  constructor(private readonly http: HttpClient) {}

  getBastah(): Observable<BastahInterface> {
    return this.http.get<BastahInterface>('/assets/bastah.json');
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
}
