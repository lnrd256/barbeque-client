import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBarbequeComponent } from './create-barbeque.component';

describe('CreateBarbequeComponent', () => {
  let component: CreateBarbequeComponent;
  let fixture: ComponentFixture<CreateBarbequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBarbequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBarbequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
