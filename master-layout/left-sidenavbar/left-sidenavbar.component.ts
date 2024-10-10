import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidenavbar',
  templateUrl: './left-sidenavbar.component.html',
  styleUrls: ['./left-sidenavbar.component.scss'] // Fix from styleUrl to styleUrls
})
export class LeftSidenavbarComponent {
  
  @Input() changeIsLeftSidebarCollapsed: boolean = false; // Use @Input decorator
  @Output() changeIsLeftSidebarCollapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>(); // Use @Output decorator

  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Invoices',
    },
    {
      routeLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsedChange.emit(!this.changeIsLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsedChange.emit(true);
  }
}
