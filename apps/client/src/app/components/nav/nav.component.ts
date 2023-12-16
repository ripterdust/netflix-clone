import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  templateUrl: './nav.component.html',
  selector: 'app-nav',
  styleUrl: './nav.component.css',
  imports: [NgClass, MenubarModule],
})
export class NavComponent {
  isNavbarHidden = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isNavbarHidden = offset > 100;
  }
}
