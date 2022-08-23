import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetcardComponent } from './petcard.component';

describe('PetcardComponent', () => {
  let component: PetcardComponent;
  let fixture: ComponentFixture<PetcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
