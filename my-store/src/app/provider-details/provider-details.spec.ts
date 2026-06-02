import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDetails } from './provider-details';

describe('ProviderDetails', () => {
  let component: ProviderDetails;
  let fixture: ComponentFixture<ProviderDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
