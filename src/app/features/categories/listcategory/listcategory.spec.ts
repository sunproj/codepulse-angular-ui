import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcategory } from './listcategory';

describe('Listcategory', () => {
  let component: Listcategory;
  let fixture: ComponentFixture<Listcategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listcategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
