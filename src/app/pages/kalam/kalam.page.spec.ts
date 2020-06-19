import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalamPage } from './kalam.page';

describe('KalamPage', () => {
  let component: KalamPage;
  let fixture: ComponentFixture<KalamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
