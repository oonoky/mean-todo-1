import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerworkerrorComponent } from './nerworkerror.component';

describe('NerworkerrorComponent', () => {
  let component: NerworkerrorComponent;
  let fixture: ComponentFixture<NerworkerrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NerworkerrorComponent]
    });
    fixture = TestBed.createComponent(NerworkerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
