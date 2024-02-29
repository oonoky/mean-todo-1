import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformComponent } from './todoform.component';

describe('TodoformComponent', () => {
  let component: TodoformComponent;
  let fixture: ComponentFixture<TodoformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoformComponent]
    });
    fixture = TestBed.createComponent(TodoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
