import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZiaratPageRoutingModule } from './ziarat-routing.module';

import { ZiaratPage } from './ziarat.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZiaratPageRoutingModule,
    FooterModule,
  ],
  declarations: [ZiaratPage],
})
export class ZiaratPageModule {}
