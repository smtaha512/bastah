import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubMenuPage } from './sub-menu.page';

describe('SubMenuPage', () => {
  let component: SubMenuPage;
  let fixture: ComponentFixture<SubMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
