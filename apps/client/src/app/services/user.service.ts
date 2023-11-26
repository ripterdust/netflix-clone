import { Injectable } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../core/interfaces/user.interface';
import { map } from 'rxjs';
import { Response } from '../core/interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class UsersService extends CoreService<any> {
  override moduleName: string = 'auth';

  constructor(http: HttpClient) {
    super(http);
  }

  login(user: Login) {
    return this.http
      .post(`${this.getUrl()}/login`, {
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((response) => {
          return response;
        }),
      );
  }
}
