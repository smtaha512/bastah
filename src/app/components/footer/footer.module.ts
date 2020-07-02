import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [CommonModule, IonicModule, SearchModule],
})
export class FooterModule {}
