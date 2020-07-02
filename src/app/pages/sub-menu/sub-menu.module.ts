import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubMenuPageRoutingModule } from './sub-menu-routing.module';

import { SubMenuPage } from './sub-menu.page';
import { ArabicModule } from 'src/app/pipes/arabic/arabic.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubMenuPageRoutingModule,
    ArabicModule,
    FooterModule,
  ],
  declarations: [SubMenuPage],
})
export class SubMenuPageModule {}
