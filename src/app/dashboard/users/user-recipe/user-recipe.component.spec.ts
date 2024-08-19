import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipeComponent } from './user-recipe.component';

describe('UserRecipeComponent', () => {
  let component: UserRecipeComponent;
  let fixture: ComponentFixture<UserRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRecipeComponent]
    });
    fixture = TestBed.createComponent(UserRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
