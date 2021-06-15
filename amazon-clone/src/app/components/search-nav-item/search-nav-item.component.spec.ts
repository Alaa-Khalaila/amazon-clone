import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavItemComponent } from './search-nav-item.component';

describe('SearchNavItemComponent', () => {
  let component: SearchNavItemComponent;
  let fixture: ComponentFixture<SearchNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
