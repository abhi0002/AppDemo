import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBlogComponent } from './tour-blog.component';

describe('TourBlogComponent', () => {
  let component: TourBlogComponent;
  let fixture: ComponentFixture<TourBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
