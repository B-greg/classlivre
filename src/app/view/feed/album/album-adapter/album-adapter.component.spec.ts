import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumAdapterComponent } from './album-adapter.component';

describe('AlbumAdapterComponent', () => {
  let component: AlbumAdapterComponent;
  let fixture: ComponentFixture<AlbumAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
