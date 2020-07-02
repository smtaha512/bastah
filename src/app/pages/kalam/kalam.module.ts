import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalamPageRoutingModule } from './kalam-routing.module';

import { KalamPage } from './kalam.page';
import { ArabicModule } from 'src/app/pipes/arabic/arabic.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalamPageRoutingModule,
    ArabicModule,
    FooterModule,
  ],
  declarations: [KalamPage],
})
export class KalamPageModule {}
