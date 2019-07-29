import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AikidokaDetailComponent } from './aikidoka-detail.component';

describe('AikidokaDetailComponent', () => {
  let component: AikidokaDetailComponent;
  let fixture: ComponentFixture<AikidokaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AikidokaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AikidokaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
