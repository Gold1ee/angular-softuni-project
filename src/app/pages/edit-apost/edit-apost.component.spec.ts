import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApostComponent } from './edit-apost.component';

describe('EditApostComponent', () => {
  let component: EditApostComponent;
  let fixture: ComponentFixture<EditApostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
