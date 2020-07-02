import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arabic' })
export class ArabicPipe implements PipeTransform {
  transform(value: string): string {
    const parts = value.split('<arabic>');
    const [arabic, urduAfterArabic] = parts[1]?.split('</arabic>') ?? [];
    const urduBeforeArabic = parts[0];
    const verse = `${urduBeforeArabic || ''} ${
      arabic ? '<span class="arabic">' + arabic + '</span>' : ''
    } ${urduAfterArabic || ''}`;
    return verse;
  }
}
