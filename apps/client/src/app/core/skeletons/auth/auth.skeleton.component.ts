import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'auth-skeleton',
  standalone: true,
  templateUrl: './auth.skeleton.component.html',
  imports: [CommonModule, RouterOutlet, CardModule],
  styleUrl: './auth.skeleton.component.css',
})
export class AuthSkeleton {}
