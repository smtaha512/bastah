import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZiaratPage } from './ziarat.page';

const routes: Routes = [
  {
    path: '',
    component: ZiaratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZiaratPageRoutingModule {}
