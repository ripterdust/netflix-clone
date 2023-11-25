import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { CoreService } from '../core/core.service';
import { Show } from '../core/interfaces/show.entity';

@Injectable({
  providedIn: 'root',
})
export class ShowsService extends CoreService<Show> {
  override moduleName: string = 'shows';
  constructor(http: HttpClient) {
    super(http);
  }
}
