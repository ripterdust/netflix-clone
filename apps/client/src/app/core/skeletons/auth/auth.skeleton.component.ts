import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-skeleton',
  standalone: true,
  templateUrl: './auth.skeleton.component.html',
  imports: [CommonModule, RouterOutlet],
})
export class AuthSkeleton {}
