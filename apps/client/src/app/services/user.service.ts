import { Injectable } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsersService extends CoreService<any> {
  override moduleName: string = 'auth';

  constructor(http: HttpClient) {
    super(http);
  }
}
