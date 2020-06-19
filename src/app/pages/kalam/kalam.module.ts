import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalamPageRoutingModule } from './kalam-routing.module';

import { KalamPage } from './kalam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalamPageRoutingModule
  ],
  declarations: [KalamPage]
})
export class KalamPageModule {}
