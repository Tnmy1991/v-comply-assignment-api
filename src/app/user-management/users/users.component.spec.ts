import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component;
  let fixture;

  const data = [
    {
      "role": "approvers",
      "_id": "5fc21a64fdfe516c1e0c6d6d",
      "username": "elsa",
      "full_name": "Elsa Ingram",
      "created_at": "2020-11-28T09:37:40.473Z"
    },
    {
      "role": "approvers",
      "_id": "5fc21a87fdfe516c1e0c6d6e",
      "username": "paul",
      "full_name": "Paul Marsh",
      "created_at": "2020-11-28T09:38:15.666Z"
    },
    {
      "role": "approvers",
      "_id": "5fc21a96fdfe516c1e0c6d6f",
      "username": "joshi",
      "full_name": "D Joshi",
      "created_at": "2020-11-28T09:38:30.349Z"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.handleEmitterData(data);
    const element = fixture.nativeElement;
    console.log(element.getElementById("users-table").rows.length)
    expect(component).toBeTruthy();
  });
});
