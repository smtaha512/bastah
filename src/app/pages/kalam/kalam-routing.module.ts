import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalamPage } from './kalam.page';

const routes: Routes = [
  {
    path: ':id',
    component: KalamPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalamPageRoutingModule {}
