import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsService } from '../../services/shows.service';
import { Show } from '../../core/interfaces/show.entity';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public showsService = inject(ShowsService);

  public shows = signal<Show[]>([]);
  public currentPage = signal(1);

  ngOnInit(): void {
    this.getShows(this.currentPage());
  }

  private getShows(currentPage: number) {
    this.showsService.loadPage(currentPage);
  }
}
