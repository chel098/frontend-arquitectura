import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarProductComponent } from './ingresar-product.component';

describe('IngresarProductComponent', () => {
  let component: IngresarProductComponent;
  let fixture: ComponentFixture<IngresarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
