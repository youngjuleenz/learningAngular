import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpadeComponent } from './spade.component';

describe('SpadeComponent', () => {
  let component: SpadeComponent;
  let fixture: ComponentFixture<SpadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
