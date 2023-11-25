import { Injectable } from '@angular/core';
import { coreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  constructor(private http: HttpClient) {}

  loadPage(page: number) {
    return this.http.get<Response>;
  }
}
