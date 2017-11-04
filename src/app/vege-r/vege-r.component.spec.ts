import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeRComponent } from './vege-r.component';

describe('VegeRComponent', () => {
  let component: VegeRComponent;
  let fixture: ComponentFixture<VegeRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegeRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
