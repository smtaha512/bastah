import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CardMenuComponent } from './card-menu.component';

@NgModule({
  declarations: [CardMenuComponent],
  exports: [CardMenuComponent],
  imports: [CommonModule, IonicModule],
})
export class CardMenuModule {}
