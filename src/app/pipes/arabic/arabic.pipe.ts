import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arabic' })
export class ArabicPipe implements PipeTransform {
  transform(value: string): string {
    const parts = value.split('<arabic>');
    const [arabic, urduAfterArabic] = parts[1]?.split('</arabic>') ?? [];
    const urdu = parts[0] + (urduAfterArabic || '');
    return `${urdu} ${
      arabic ? '<span class="arabic">' + arabic + '</span>' : ''
    }`;
  }
}
