import { TestBed, inject } from '@angular/core/testing';

import { UserServiceModalService } from './user-service-modal.service';

describe('UserServiceModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceModalService]
    });
  });

  it('should be created', inject([UserServiceModalService], (service: UserServiceModalService) => {
    expect(service).toBeTruthy();
  }));
});
