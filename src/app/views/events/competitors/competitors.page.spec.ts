import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetitorsPage } from './competitors.page';

describe('CompetitorsPage', () => {
  let component: CompetitorsPage;
  let fixture: ComponentFixture<CompetitorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
