import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly sections = [
    { displayText: 'قطعات', value: 'qata' },
    { displayText: 'رباعیات', value: 'rubai' },
    { displayText: 'سوز', value: 'soaz' },
    { displayText: 'سلام', value: 'salam' },
    { displayText: 'مرثیے', value: 'marsiya' },
    { displayText: 'نوحہ/بین', value: 'noha' },
    { displayText: 'حمد، نعت، مناقب', value: 'hamd' },
    { displayText: 'متفرقات و قومیات', value: 'mutafarriq' },
    { displayText: 'حدیثِ کساء', value: 'kisa' },
    { displayText: 'زیارات', value: 'ziarat' },
  ];
}
