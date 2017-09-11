import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAdapterComponent } from './image-adapter.component';

describe('ImageAdapterComponent', () => {
  let component: ImageAdapterComponent;
  let fixture: ComponentFixture<ImageAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
