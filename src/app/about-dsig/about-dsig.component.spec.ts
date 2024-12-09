import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDsigComponent } from './about-dsig.component';

describe('AboutDsigComponent', () => {
  let component: AboutDsigComponent;
  let fixture: ComponentFixture<AboutDsigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDsigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
