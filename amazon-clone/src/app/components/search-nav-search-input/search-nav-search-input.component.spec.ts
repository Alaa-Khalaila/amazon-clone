import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavSearchInputComponent } from './search-nav-search-input.component';

describe('SearchNavSearchInputComponent', () => {
  let component: SearchNavSearchInputComponent;
  let fixture: ComponentFixture<SearchNavSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNavSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
