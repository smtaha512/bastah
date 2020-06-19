import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubMenuPageRoutingModule } from './sub-menu-routing.module';

import { SubMenuPage } from './sub-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubMenuPageRoutingModule
  ],
  declarations: [SubMenuPage]
})
export class SubMenuPageModule {}
