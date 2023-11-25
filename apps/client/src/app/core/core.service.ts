import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export class coreService {
  token: string = localStorage.getItem('token') || '';
  baseUrl: string = '';

  constructor(protected http: HttpClient) {}
  loadPage(page: number) {
    return this.http
      .get(this.baseUrl, { params: { page } })
      .pipe(map((response) => response));
  }
}
