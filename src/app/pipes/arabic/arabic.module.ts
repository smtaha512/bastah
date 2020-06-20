import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArabicPipe } from './arabic.pipe';

@NgModule({
  declarations: [ArabicPipe],
  exports: [ArabicPipe],
  providers: [ArabicPipe],
  imports: [CommonModule],
})
export class ArabicModule {}
