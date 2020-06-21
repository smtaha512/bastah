import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZiaratPageRoutingModule } from './ziarat-routing.module';

import { ZiaratPage } from './ziarat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZiaratPageRoutingModule
  ],
  declarations: [ZiaratPage]
})
export class ZiaratPageModule {}
