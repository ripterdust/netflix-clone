import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';

@Component({
  imports: [RouterModule, NavComponent],
  standalone: true,
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {}
