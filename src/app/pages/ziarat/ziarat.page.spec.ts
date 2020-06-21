import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZiaratPage } from './ziarat.page';

describe('ZiaratPage', () => {
  let component: ZiaratPage;
  let fixture: ComponentFixture<ZiaratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZiaratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZiaratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
