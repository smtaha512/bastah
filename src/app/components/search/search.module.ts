import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ArabicModule } from 'src/app/pipes/arabic/arabic.module';
import { SearchPipeModule } from 'src/app/pipes/search.pipe/search.pipe.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    ArabicModule,
    SearchPipeModule,
  ],
})
export class SearchModule {}
