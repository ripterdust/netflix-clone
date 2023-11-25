import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Response } from './interfaces/response.interface';

export class CoreService<T> {
  baseUrl: string = '/api';
  moduleName: string = 'moduleName';
  constructor(protected http: HttpClient) {}

  protected getUrl(): string {
    return `${this.baseUrl}/${this.moduleName}`;
  }

  loadPage(page: number): Observable<T[]> {
    return this.http.get<Response<T>>(this.getUrl(), { params: { page } }).pipe(
      map((response: Response<T>) => {
        return response.data;
      }),
    );
  }
}
